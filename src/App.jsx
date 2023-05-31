import { useEffect, useState } from 'react';
import './App.css';
import BossCard from './BossCard';
import {app} from './firebase'
import { getDatabase, ref, child, get, update,push} from "firebase/database";

function App() {

const [bosses, setBosses] = useState([]);


const dbRef = ref(getDatabase(app));
get(child(dbRef, `bosses`)).then((snapshot) => {
  if (snapshot.exists()) {
    setBosses(snapshot.val())
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

  let defeatedBosses = 0;

  for(const boss of bosses){
    if(boss.defeated === true){
      defeatedBosses++
    }
  }

  /* const defeatedBoss = (boss) => {
    const bossUpdate = {
      id: boss.id,
      name:boss.name,
      image:boss.image,
      defeated:!boss.defeated
    }
    return(update(ref(`${dbRef}/bosses/${boss.id - 1}`),bossUpdate))
  } */

  function updateBoss(boss) {
    const db = getDatabase();
  
    // A post entry.
    const postData = {
      id: boss.id,
      name: boss.name,
      image: boss.image,
      defeated: !boss.defeated
    };

    const id = boss.id - 1
    const updates = {};
    updates['bosses/' + id] = postData;
  
    return update(ref(db), updates);
  }

  const renderBosses = bosses.map((boss) => {
    return <BossCard key={boss.id} boss={boss} updateBoss={updateBoss} />;
  });


  return (
    <div className="container">
      <div className='topText'>
      <h2>Bosses Derrotados: {defeatedBosses}</h2>
      <h2>Bosses Restantes: {bosses.length - defeatedBosses}</h2>  
      </div>
      
      <div className='container-bosses'>
      {renderBosses}
      </div>
    </div>
  );
}

export default App;
