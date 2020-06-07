import mongoose = require("mongoose");
import dataService from "./service";

export interface IPlanet extends dataService.Document {
  _id: string;
  size: number;
  distanceFromSun: number;
}

export const PlanetSchema = new dataService.Schema(
  {
    _id: { type: String, required: true },
    size: { type: Number, required: true },
    distanceFromSun: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const Planet = mongoose.model<IPlanet>("Planet", PlanetSchema);
export default Planet;
