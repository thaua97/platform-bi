import { createServer, Model } from "miragejs"
import drivers from '@/assets/json/drivers.json';
export default function () {
  createServer({
    models: {
      driver: Model,
    },
    fixtures: {
      drivers
    },
    seeds (server) {
      server.loadFixtures();
    },
    routes() {
      this.get("/api/drivers");
      this.get("/api/drivers/champions", schema => { 
        return schema.drivers.where(driver => driver.Champion === "True")
      });
      this.get("/api/drivers/active", schema => { 
        return schema.drivers.where(driver => driver.Active === "True")
      });
      this.get("/api/drivers/winners", schema => { 
        return schema.drivers.where(driver => driver.Race_Wins > 0)
      });
    },
  })
}