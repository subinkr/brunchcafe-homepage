function PrivacyPolicy() {
  const effectiveDate = '2025-12-29'

  return (
    <div className="container page">
      <h1 className="page__title">개인정보처리방침</h1>
      <p className="page__meta">시행일: {effectiveDate}</p>

      <section className="page__section">
        <h2>1. 개요</h2>
        <p>
          본 개인정보처리방침은 “분위기 좋은 카페”(이하 “서비스”)의 개인정보 처리 기준을 안내합니다.
        </p>
      </section>

      <section className="page__section">
        <h2>2. 수집하는 개인정보 항목</h2>
        <div className="page__list">
          <div className="page__item">
            <div className="page__itemTitle">위치정보(선택)</div>
            <div className="page__itemBody">
              거리 정렬, 내 주변 카페 표시 등 기능 제공을 위해 기기 위치 권한을 요청할 수 있습니다.
            </div>
          </div>
          <div className="page__item">
            <div className="page__itemTitle">즐겨찾기 정보</div>
            <div className="page__itemBody">즐겨찾기한 카페 목록은 기기 내 저장소에 저장될 수 있습니다.</div>
          </div>
          <div className="page__item">
            <div className="page__itemTitle">로그/진단 정보</div>
            <div className="page__itemBody">
              서비스 안정성 향상을 위해 오류 로그 등 진단 정보가 생성될 수 있습니다.
            </div>
          </div>
        </div>
      </section>

      <section className="page__section">
        <h2>3. 개인정보의 이용 목적</h2>
        <div className="page__list">
          <div className="page__item">
            <div className="page__itemTitle">서비스 제공</div>
            <div className="page__itemBody">
              지도 기반 카페 탐색, 검색/정렬/필터, 네이버 지도 길찾기 기능 제공
            </div>
          </div>
          <div className="page__item">
            <div className="page__itemTitle">개선 및 보안</div>
            <div className="page__itemBody">오류 분석, 품질 개선, 부정 이용 방지</div>
          </div>
        </div>
      </section>

      <section className="page__section">
        <h2>4. 보유 및 이용 기간</h2>
        <p>
          원칙적으로 개인정보는 수집 및 이용 목적이 달성되면 지체 없이 파기합니다. 단, 관계 법령에 따라 일정 기간
          보존이 필요한 경우 해당 법령에서 정한 기간 동안 보관할 수 있습니다.
        </p>
      </section>

      <section className="page__section">
        <h2>5. 제3자 제공</h2>
        <p>
          서비스는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 이용자 동의가 있거나 법령에
          근거가 있는 경우에 한해 제공될 수 있습니다.
        </p>
      </section>

      <section className="page__section">
        <h2>6. 처리 위탁</h2>
        <p>
          서비스 운영을 위해 외부 서비스를 사용할 수 있습니다.
        </p>
      </section>

      <section className="page__section">
        <h2>7. 이용자의 권리</h2>
        <p>
          이용자는 개인정보와 관련하여 열람, 정정, 삭제, 처리정지 등을 요청할 수 있습니다. 요청은 아래 문의처로
          연락해 주세요.
        </p>
      </section>

      <section className="page__section">
        <h2>8. 문의처</h2>
        <p>
          개인정보 관련 문의: <a href="mailto:ceo@brunchcafe.kr">ceo@brunchcafe.kr</a>
        </p>
      </section>

      <section className="page__section">
        <h2>9. 변경</h2>
        <p>
          본 개인정보처리방침의 내용이 변경될 수 있습니다.
        </p>
      </section>
    </div>
  )
}

export default PrivacyPolicy
