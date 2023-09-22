import axios from 'axios';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

function httpGetDrivers(path) {
  return new Observable(async (subscriber) => {
    try {
      const res = await axios(`/api/${path}`)
      if(Array.isArray(res.data.drivers)) {
        res.data.drivers.forEach(driver => subscriber.next(driver))
      } else {
        subscriber.next(res.data.drivers)
      }
    } catch (err) {
      console.log(err)
    } finally {
      subscriber.complete()
    }
  })
}

export const useDriversStore = defineStore('drivers', {
  state: () => ({
    drivers: [],
    champions: [],
    inActivity: [],
    raceWins: [] 
  }),

  getters: {
    getDrivers: (state) => state.drivers,
    getChampions: (state) => state.champions,
    getInActivity: state => state.inActivity,
  },
  
  actions: {
    async loadData() {
      httpGetDrivers
        .pipe(
          map()
        )
    },
    async setDrivers() {
      try {
        const res = await axios(`/api/drivers`)
        this.drivers = res.data.drivers
      } catch (err) {
        console.log(err)
      }
    },
    async setChampions() {
      try {
        const res = await axios(`/api/drivers/champions`)
        this.champions = res.data.drivers
      } catch (err) {
        console.log(err)
      }
    },
    async setInActivity() {
      try {
        const res = await axios(`/api/drivers/active`);
        this.inActivity = res.data.drivers
      } catch (err) {
        console.log(err)
      }
    },
    setRaceWins () {
      httpGetDrivers(`drivers/winners`)
        .pipe(
          map(driver => driver.Race_Wins)
        )
        .subscribe(data => {
          console.log(data)
        })
    }
  },
})