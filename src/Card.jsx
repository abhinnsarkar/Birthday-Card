export default () => (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY Baba!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY BABA!</h3>
        <p>
          Happy 41st birthday!!! Thanks for being a good and fun dad and being with us when we need you!
        </p>
        <img 
            src={require('./us.png')} 
            style={{
                width:'130px',
                height:'130px',
                position: 'absolute',
                left: '20%'
            }}
        />
      </div>
    </div>
  );