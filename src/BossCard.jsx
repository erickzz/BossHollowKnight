import PropTypes from 'prop-types';

const BossCard = ({boss,updateBoss}) => {

    const defeated = boss.defeated === true ? 'defeatedBoss' : null

  return (
    <div className={`bossCard ${defeated}`} onClick={()=>{updateBoss(boss)}} >
        <img src={boss.image} alt={`Boss ${boss.name} image`}/>
        <h3>{boss.name}</h3>
    </div>
  )
}

BossCard.propTypes = {
  boss: PropTypes.shape({
    defeated: PropTypes.bool,
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  updateBoss: PropTypes.func.isRequired,
};

export default BossCard