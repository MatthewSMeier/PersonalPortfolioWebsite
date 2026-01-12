function SkillCard({ logo, name, color }) {
  return (
    <div className="skillCard" style={{ backgroundColor: color }}>
      <img src={logo} alt={`${name} logo`} className="skillIcon" />
      <p className="skillText">{name}</p>
    </div>
  );
}

export default SkillCard;