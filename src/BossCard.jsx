import React from 'react'

const BossCard = ({boss,updateBoss}) => {

    /* const changeBoss async () => {
        
    } */

    const defeated = boss.defeated === true ? 'defeatedBoss' : null

  return (
    <div className={`bossCard ${defeated}`} onClick={()=>{updateBoss(boss)}} >
        <img src={boss.image} alt={`Boss ${boss.name} image`}/>
        <h3>{boss.name}</h3>
    </div>
  )
}

export default BossCard