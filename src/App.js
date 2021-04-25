import './App.css';
import Lista from './components/Lista/Lista';
import LicnaKarta from './components/LicnaKarta/LicnaKarta';
import Film from './components/Film/Film';
import Knjiga from './components/Knjiga/Knjiga';

function App() {
  return (
    <div className="App">
      <h1>React komponente</h1>
      <h3>Lične karte:</h3>
      <Lista>
        <LicnaKarta
          name="Marija Jovanović"
          bdate="15.08.1983."
          city="Podgorica"
          image="1.jpg"
        />
        <LicnaKarta
          name="Darko Marić"
          bdate="20.05.1993."
          city="Budva"
          image="2.jpg"
        />
        <LicnaKarta
          name="Melisa Konatar"
          bdate="30.01.1989."
          city="Nikšić"
          image="3.jpg"
        />
      </Lista>
      <h3>Filmovi:</h3>
      <Lista>
        <Film
          name="Bjekstvo iz Šošenka"
          year="1994."
          genre="drama"
          director="Frank Darabont"
          actors="Tim Robins, Morgan Freeman, Bob Gunton..."
          image="1.jpg"
        />
        <Film
          name="Život je lijep"
          year="1997."
          genre="komedija/drama"
          director="Roberto Benigni"
          actors="Roberto Benigni, Nicoletta Braschi, Giorgio Cantarini..."
          image="2.jpg"
        />
        <Film
          name="Dobar, Loš, Zao"
          year="1966."
          genre="vestern"
          director="Sergio Leone"
          actors="Clint Eastwood, Eli Wallach, Lee Van Cleef..."
          image="3.jpg"
        />
      </Lista>
      <h3>Knjige:</h3>
      <Lista>
        <Knjiga
          name="Gospodar prstenova"
          year="1954."
          author="J. R. R. Tolkien"
          quote="Jedan prsten da vlada svima"
          image="1.jpg"
        />

        <Knjiga
          name="Dina"
          year="1966."
          author="Frank Herbert"
          quote="Misterija života nije problem koji treba riješiti, već realnost koju treba iskusiti"
          image="2.jpg"
        />
        <Knjiga
          name="Pjesma leda i vatre"
          year="1996."
          author="George R. R. Martin"
          quote="Zima dolazi"
          image="3.jpg"
        />
      </Lista>
    </div>
  );
}

export default App;
