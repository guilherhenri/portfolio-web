const NavigationDots = ({ acitve }) => {
  return (
    <div className="app__navigation">
      {['home', 'sobre', 'trabalho', 'habilidades', 'contato'].map(
        (item, index) => (
          <a
            key={item + index} 
            href={`#${item}`} 
            className="app__navigation-dot"
            style={acitve === item && { backgroundColor: '#313bac'}}
          >{''}</a>
        )
      )}
    </div>
  )
}

export default NavigationDots;