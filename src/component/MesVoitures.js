import React from "react";
import Voitures from "./Voitures";

class MesVoitures extends React.Component {
  // 
  constructor(props) {
    super(props);
    this.state = {
      voitures:[
        {
          id: 1,
          marque: "Ford",
          couleur: "rouge",
          annee: 1964,
        },
        {
          id: 2,
          marque: "Peugeot",
          couleur: "bleu",
          annee: 1964,
        },
        {
          id: 3,
          marque: "Volvo",
          couleur: "blanc",
          annee: 1964,
        },
        {
          id: 4,
          marque: "Ferrari",
          couleur: "noir",
          annee: 1964,
        },
    ]};
  }
  render() {
    return (
      <Voitures voitures={this.state.voitures } />
    );
  }
}
export default MesVoitures;
