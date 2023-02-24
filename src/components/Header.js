function Header(props) {
    return(
        <header>
        <h3>{props.title}</h3>
        <nav>
          <a href= "#">Home</a>
          <a href="#">About me</a>
          <a href="#">Projects</a>
          <a href="#">Contact Me </a>
        </nav>
      </header>
    )
}

export default Header;