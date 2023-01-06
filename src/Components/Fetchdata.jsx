import React, {useState, useEffect} from 'react'
import Card from './Card';
import JSON from './Data/City.json'

const Fetchdata = () => {
    let [data,setData] = useState("");
    let[search,setSearch] = useState("");
    let[issubmit, setIssubmit] = useState(false);
    let API_KEY = "3291d0b18e4954b65ab3b32d147b3009";
    let Getdata;
    useEffect(() => {
        if(issubmit) {
            Getdata = async () => {
                await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`)
            .then(res1 =>
                res1
                .json()
                .then(res=>{
                    setData([res]);
                    console.log(res);
                })
                .catch(err => console.log(err))
            )
            .catch(error => console.log(error));
        };
        Getdata();
    }
    setIssubmit(false);
    }, [issubmit]);

    let handleSubmit = e => {
        e.preventDefault();
        setIssubmit(true);
        console.log("Submitting");
    };


  return (
    <section className='main-Block'>
        <article>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" autoFocus placeholder='search here your location...' onChange={e => {
                    setSearch(e.target.value);
                }} list="city"/>

                <datalist id="city">
                    {JSON.map(value =>{
                        return <option>{value.name}</option>
                    })}
                </datalist>

                <button>Get data</button>
            </form>

                {data ? (
                    <Card name = {data[0].name}
                    img = {data[0].weather.id}
                    humidity = {data[0].main.humidity}
                    temp = {data[0].main.temp}
                    wind = {data[0].wind.speed}
                    w_descrip = {data[0].weather[0].main}
                    visibility = {data[0].visibility}
                    pressure = {data[0].main.pressure}
                    ></Card>): ("")}
          
        </article>
    </section>
  )
}

export default Fetchdata
