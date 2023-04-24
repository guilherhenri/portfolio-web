import { SocialMedia, NavigationDots } from '../components';  

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />

      <div className='app__wrapper app__flex'>
        <Component />

        <div className='copyright'>
          <p className='p-text'>@2023 GUILHERME</p>
          <p className='p-text'>Todos os direitos reservados</p>
        </div>
      </div>

      <NavigationDots acitve={idName} />
    </div>
  )
}

export default AppWrap;