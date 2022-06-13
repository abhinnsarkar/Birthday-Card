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
        <small>
          Happy 41st birthday!!! Thanks for being a good, fun dad and teaching us and doing things with us!
        </small>
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