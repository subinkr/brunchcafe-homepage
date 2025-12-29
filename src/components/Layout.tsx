import { Link, Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const appStoreUrl = 'https://apps.apple.com/kr/app/id6756539955'

  return (
    <div className="app-shell">
      <header className="header">
        <div className="container header__inner">
          <Link to="/" className="brand" aria-label="브런치카페 홈페이지">
            <span className="brand__mark" aria-hidden>
              B
            </span>
            <span className="brand__text">분위기 좋은 카페</span>
          </Link>

          <nav className="nav" aria-label="주요 링크">
            <a className="nav__link" href={isHome ? '#features' : '/#features'}>
              기능
            </a>
            <a className="nav__link" href={isHome ? '#how' : '/#how'}>
              사용 방법
            </a>
            <a className="nav__link" href={appStoreUrl} target="_blank" rel="noreferrer">
              App Store
            </a>
            <Link className="nav__link" to="/privacy">
              개인정보처리방침
            </Link>
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__left">
            <div className="footer__title">분위기 좋은 카페</div>
          </div>

          <div className="footer__right">
            <Link className="footer__link" to="/privacy">
              개인정보처리방침
            </Link>
            <a className="footer__link" href="mailto:ceo@brunchcafe.kr">
              문의: ceo@brunchcafe.kr
            </a>
            <div className="footer__meta">© {new Date().getFullYear()} BrunchCafe</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
