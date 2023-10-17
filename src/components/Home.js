import Photo from './images/Hero.png'

const Home = () => {
  return (
    <div>
        <font face="Comic Sans MS" color="white">
        <fieldset style={{ width: '80%' }}>
            <center>
                <h1>Welcome Khana Khazana</h1>
          <p></p>
          <img src={Photo} alt='Profile'  style={{border:"1px soild" , borderRadius:"10px"}}/>
          <h3>
            An amazing way to Learn Cooking
          </h3>
          <p>It is a Digital cook Book you can take and read anywhere</p>
          <p>NOW, NO NEED TO ORDER WHEN YOU CAN MAKE IT AT HOME</p>
            <br/><br/><br/>
            <h3>
                Browse Through Various Recipes from the NavBar 
            </h3>
            </center>
          
        </fieldset>
      </font>
    </div>
  )
}

export default Home