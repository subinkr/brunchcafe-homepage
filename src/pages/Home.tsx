import { Heart, Map, Navigation, Search, Sparkles, UserCheck } from 'lucide-react'

function Home() {
  const appStoreUrl = 'https://apps.apple.com/kr/app/id6756539955'
  const playStoreUrl = 'http://play.google.com/store/apps/details?id=kr.brunchcafe'

  return (
    <div>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">지도 기반 카페 탐색 앱</p>
            <h1 className="hero__title">분위기 좋은 카페를 빠르게 찾는 가장 쉬운 방법</h1>
            <p className="hero__subtitle">
              내 주변 카페를 지도에서 한눈에 보고, 추천/베스트/시그니처 카페를 필터링하고,
              마음에 드는 곳은 즐겨찾기해두세요.
            </p>

            <div className="hero__pills" aria-label="핵심 포인트">
              <span className="pill">추천/베스트/시그니처</span>
              <span className="pill">지도 기반 탐색</span>
              <span className="pill">즐겨찾기</span>
              <span className="pill">다양한 지도 앱 연동</span>
            </div>

            <div className="hero__cta">
              <a className="button button--primary" href={appStoreUrl} target="_blank" rel="noreferrer">
                App Store
              </a>
              <a className="button button--primary" href={playStoreUrl} target="_blank" rel="noreferrer">
                Google Play
              </a>
            </div>

            <div className="hero__meta">iOS / Android 지원</div>
          </div>

          <div className="hero__visual">
            <div className="phone" aria-hidden>
              <div className="phone__frame">
                <div className="phone__notch" />
                <img className="phone__image" src="/app.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <h2 className="section__title">핵심 기능</h2>

          <div className="grid">
                        <div className="card">
              <div className="card__icon">
                <Map />
              </div>
              <h3 className="card__title">지도에서 카페 탐색</h3>
              <p className="card__body">
                지도에 표시되는 마커로 주변 카페를 확인하고, 클러스터/확대 시에도 편하게 탐색할 수 있어요.
              </p>
            </div>
            <div className="card">
              <div className="card__icon">
                <Search />
              </div>
              <h3 className="card__title">추천/베스트/시그니처 필터</h3>
              <p className="card__body">
                에디터가 직접 엄선한 추천, 베스트, 시그니처 카페를 필터링하여 실패 없는 선택을 도와드려요.
              </p>
            </div>
            <div className="card">
              <div className="card__icon">
                <Heart />
              </div>
              <h3 className="card__title">즐겨찾기</h3>
              <p className="card__body">
                마음에 드는 카페는 별표로 저장하고, 나만의 카페 리스트를 만들어 언제든지 다시 찾아보세요.
              </p>
            </div>
                        <div className="card">
              <div className="card__icon">
                <Navigation />
              </div>
              <h3 className="card__title">다양한 지도 앱 연동</h3>
              <p className="card__body">
                네이버 지도, 카카오맵, Apple 지도 등 평소에 즐겨 쓰는 지도 앱으로 길찾기를 바로 시작할 수 있어요.
              </p>
            </div>
            <div className="card">
              <div className="card__icon">
                <Sparkles />
              </div>
              <h3 className="card__title">인스타그램 연동</h3>
              <p className="card__body">
                앱에서 바로 카페의 인스타그램 피드를 확인하고, 실제 방문객들의 사진으로 분위기를 느껴보세요.
              </p>
            </div>
            <div className="card">
              <div className="card__icon">
                <UserCheck />
              </div>
              <h3 className="card__title">정보 수정 요청</h3>
              <p className="card__body">
                카페 정보가 바뀌었을 때 수정 요청을 남기고, 관리자가 요청을 확인해 반영할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="section section--alt">
        <div className="container">
          <h2 className="section__title">사용 방법</h2>
          <div className="steps">
                                    <div className="step">
              <div className="step__num">1</div>
              <div className="step__content">
                <div className="step__title">지도를 열고 주변을 탐색</div>
                <div className="step__body">마커를 탭해서 카페를 선택하세요.</div>
              </div>
            </div>
            <div className="step">
              <div className="step__num">2</div>
              <div className="step__content">
                <div className="step__title">필터로 후보 좁히기</div>
                <div className="step__body">추천/베스트/시그니처 필터, 즐겨찾기만 보기 등을 활용합니다.</div>
              </div>
            </div>
            <div className="step">
              <div className="step__num">3</div>
              <div className="step__content">
                <div className="step__title">길찾기로 바로 이동</div>
                <div className="step__body">선호하는 지도 앱으로 길안내를 받아 편하게 방문하세요.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section__title">자주 묻는 질문</h2>

          <div className="faq">
                                    <details className="faq__item">
              <summary className="faq__q">추천/베스트/시그니처는 어떤 기준으로 선정되나요?</summary>
              <div className="faq__a">저희 팀의 에디터들이 직접 방문하고 경험한 솔직한 평가를 바탕으로 까다롭게 선정합니다.</div>
            </details>

                        <details className="faq__item">
              <summary className="faq__q">길찾기는 어떤 지도 앱을 지원하나요?</summary>
              <div className="faq__a">네이버 지도, 카카오맵, Apple 지도 등 국내에서 자주 사용하는 대부분의 지도 앱을 지원합니다.</div>
            </details>

            <details className="faq__item">
              <summary className="faq__q">카페 정보가 달라요. 수정 요청이 가능한가요?</summary>
              <div className="faq__a">네, 앱에서 정보 수정 요청을 남겨주시면 관리자가 확인 후 빠르게 반영합니다.</div>
            </details>
          </div>
        </div>
      </section>

      <section id="download" className="section">
        <div className="container download">
          <div className="download__copy">
            <h2 className="section__title">다운로드</h2>

                        <div className="download__buttons">
              <a className="button button--primary" href={appStoreUrl} target="_blank" rel="noreferrer">
                App Store
              </a>
              <a className="button button--primary" href={playStoreUrl} target="_blank" rel="noreferrer">
                Google Play
              </a>
            </div>

            <div className="download__meta">
              문의: <a href="mailto:ceo@brunchcafe.kr">ceo@brunchcafe.kr</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
