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
          Happy birthday!!! Sorry we couldnt do anything but happy birthday!
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