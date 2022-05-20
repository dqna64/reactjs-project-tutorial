import Card from 'components/Card';
import 'styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>My Restaurants</h1>
      <p>Here is a list of all the restaurants that I want to keep a record of either because I like them, dislike them, or would like to find out.</p>
      <Card name="Harry's Café de Wheels" tags={["Pies", "Hotdogs"]} address="886-896 Princes Hwy, Tempe NSW 2044" website="https://harryscafe.loke.app" notes="Has really nice specialty hotdogs and vegan pies. Try the Tiger Pie (mashed peas and potato with gravy)!" rating={4} visits={0}/>
      {/* <div className="card">
        <h3>Harry's Café de Wheels</h3>
        <h4>Pies · Hotdogs</h4>
        <h4>886-896 Princes Hwy, Tempe NSW 2044</h4>
        <h4>https://harryscafe.loke.app</h4>
        <p>Has really nice specialty hotdogs and vegan pies. Try the Tiger Pie (mashed peas and potato with gravy)!</p>
        <div>
          <div>Not yet visited</div>
          <div>⭐⭐⭐⭐</div>
        </div>
        <div>
          <button>Visit</button>
          <div>Rate ⭐⭐⭐⭐⭐</div>
        </div>
      </div>
      <div className="card">
        <h3>Yasaka Ramen</h3>
        <h4>Ramen</h4>
        <h4>644 George St, Sydney NSW 2000</h4>
        <h4>https://zundoworldsquare.vipguest.net.au/</h4>
        <p>One of Sydney's best ramen eateries. Located in World Square near lightrail.</p>
        <div>
          <div>Visited 2 times</div>
          <div>⭐⭐⭐⭐</div>
        </div>
        <div>
          <button>Visit</button>
          <div>Rate ⭐⭐⭐⭐⭐</div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
