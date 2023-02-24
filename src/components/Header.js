function Header(props) {
    return(
        <header>
        <h3>{props.title}</h3>
        <nav>
          <button onClick={() => props.setPage('home') }>Home</button>
          <button onClick={() => props.setPage('aboutme') }> About me </button>
          <button onClick={() => props.setPage('project') }>Projects</button>
          <button onClick={() => props.setPage('contact') }>Contact Me </button>
        </nav>
      </header>
    )
}

export default Header;