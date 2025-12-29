function Home() {
  const appStoreUrl = 'https://apps.apple.com/kr/app/id6756539955'

  return (
    <div>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">지도 기반 카페 탐색 앱</p>
            <h1 className="hero__title">분위기 좋은 카페를 빠르게 찾는 가장 쉬운 방법</h1>
            <p className="hero__subtitle">
              내 주변 카페를 지도에서 한눈에 보고, 추천/시그니처 카페를 필터링하고,
              마음에 드는 곳은 즐겨찾기해두세요.
            </p>

            <div className="hero__pills" aria-label="핵심 포인트">
              <span className="pill">네이버 지도 길찾기</span>
              <span className="pill">즐겨찾기</span>
              <span className="pill">거리/평가 필터</span>
              <span className="pill">이벤트 표시</span>
            </div>

            <div className="hero__cta">
              <a className="button button--primary" href={appStoreUrl} target="_blank" rel="noreferrer">
                App Store에서 받기
              </a>
              <a className="button button--ghost" href="#features">
                기능 보기
              </a>
            </div>

            <div className="hero__meta">iOS 지원</div>
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
              <h3 className="card__title">지도에서 카페 탐색</h3>
              <p className="card__body">
                지도에 표시되는 마커로 주변 카페를 확인하고, 클러스터/확대 시에도 편하게 탐색할 수 있어요.
              </p>
            </div>
            <div className="card">
              <h3 className="card__title">검색 / 지역 / 거리 / 평가 필터</h3>
              <p className="card__body">
                카페 검색과 정렬(이름/거리/평가), 평가(권장/추천/시그니처) 필터로 원하는 분위기의 카페를 찾습니다.
              </p>
            </div>
            <div className="card">
              <h3 className="card__title">즐겨찾기</h3>
              <p className="card__body">
                마음에 드는 카페는 별표로 저장하고, 즐겨찾기만 모아 볼 수 있어요.
              </p>
            </div>
            <div className="card">
              <h3 className="card__title">이벤트 강조</h3>
              <p className="card__body">
                이벤트가 있는 카페는 한눈에 보이도록 표시해서, 특별한 방문 기회를 놓치지 않게 도와줘요.
              </p>
            </div>
            <div className="card">
              <h3 className="card__title">네이버 지도 길찾기</h3>
              <p className="card__body">
                선택한 카페를 네이버 지도에서 바로 열어 길찾기를 시작할 수 있어요.
              </p>
            </div>
            <div className="card">
              <h3 className="card__title">정보 수정 요청(관리)</h3>
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
                <div className="step__title">필터/정렬로 후보를 좁히기</div>
                <div className="step__body">거리순 정렬, 평가 필터, 즐겨찾기만 보기 등을 활용합니다.</div>
              </div>
            </div>
            <div className="step">
              <div className="step__num">3</div>
              <div className="step__content">
                <div className="step__title">길찾기로 바로 이동</div>
                <div className="step__body">네이버 지도에서 길찾기를 시작할 수 있어요.</div>
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
              <summary className="faq__q">길찾기는 어떤 지도를 지원하나요?</summary>
              <div className="faq__a">현재는 네이버 지도 길찾기만 지원합니다.</div>
            </details>

            <details className="faq__item">
              <summary className="faq__q">즐겨찾기는 어디에 저장되나요?</summary>
              <div className="faq__a">즐겨찾기 정보는 앱에서 관리됩니다.</div>
            </details>

            <details className="faq__item">
              <summary className="faq__q">카페 정보가 달라요. 수정 요청이 가능한가요?</summary>
              <div className="faq__a">앱에서 정보 수정 요청을 남길 수 있습니다.</div>
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
                App Store에서 받기
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
