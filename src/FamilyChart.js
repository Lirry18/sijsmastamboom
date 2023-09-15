import React from "react";
import f3 from "family-chart"; // npm i family-chart
import "./family-chart.css"; // create file 'family-chart.css' in same directory, copy/paste css from examples/create-tree


export default class FamilyTree extends React.Component {
  cont = React.createRef();


  componentDidMount() {
    if (!this.cont.current) return;

    // PEE IMPORTS
    const ndedi_url = require('./images/pee/ndedi.jpeg');
    const casper_url = require('./images/pee/casper.jpeg');
    const titus_url = require('./images/pee/titus.jpg');
    const ruth_url = require('./images/pee/ruth.jpg');
    const jell_url = require('./images/pee/jelle.jpg');
    const teun_url = require('./images/pee/teun.jpg');
    const pe_url = require('./images/pee/pe.jpg');
    const riekje_url = require('./images/pee/riekje.jpg');


    // ANE IMPORTS

    const floris_url = require('./images/ane/floris.jpeg');
    const philine_url = require('./images/ane/philine.jpeg');
    const jagger_url = require('./images/ane/jagger.jpeg');
    const barbara_url = require('./images/ane/barbara.jpeg');
    const sjoerd_ane__url = require('./images/ane/sjoerd.jpeg');
    const shirley_url = require('./images/ane/shirley.jpeg');
    const noor_url = require('./images/ane/noor.jpeg');


    // RIEA IMPORTS

    const luka_url = require('./images/riea/luka.jpeg');
    const mila_url = require('./images/riea/mila.jpeg');
    const fay_url = require('./images/riea/fay.jpeg');
    const ramses_url = require('./images/riea/ramses.jpeg');
    const sam_url = require('./images/riea/sam.jpeg');
    const chloe_url = require('./images/riea/chloe.jpeg');
    const lir_url = require('./images/riea/lir.jpeg');
    const chris_url = require('./images/riea/chris.png');
    const riea_url = require('./images/riea/riea.jpeg');
    const flip_url = require('./images/riea/flip.jpeg');
    const jessica_url = require('./images/riea/jessica.jpeg');
    const mielo_url = require('./images/riea/mielo.jpeg');
    const ira_url = require('./images/riea/ira.png');
    const hedy_url = require('./images/riea/hedy.png');
    const sky_url = require('./images/riea/sky.png');


    // MARIAN IMPORTS

    const bas_url = require('./images/marian/bas.jpeg');
    const eva_url = require('./images/marian/eva.jpeg');
    const oliva_url = require('./images/marian/oliva.jpeg');
    const anne_url = require('./images/marian/anne.jpeg');
    const yago_url = require('./images/marian/yago.jpeg');
    const jochem_url = require('./images/marian/jochem.jpeg');
    const heleen_url = require('./images/marian/heleen.jpeg');
    const franka_url = require('./images/marian/franka.jpeg');
    const janne_url = require('./images/marian/janne.jpeg');
    const marian_url = require('./images/marian/marian.jpeg');
    const levien_url = require('./images/marian/levien.jpeg');
    const rutger_url = require('./images/marian/rutger.jpeg');


    // INA IMPORTS

    const ina_url = require('./images/ina/ina.jpg');
    const gerard_url = require('./images/ina/gerard.jpg');
    const evi_url = require('./images/ina/evi.jpeg');
    const cees_url = require('./images/ina/cees.jpeg');
    const pim_url = require('./images/ina/pim.jpeg');
    const nicolien_url = require('./images/ina/nicolien.png');
    const martijn_url = require('./images/ina/martijn.png');
    const nils_url = require('./images/ina/nils.png');
    const elin_url = require('./images/ina/elin.png');
    const floor_url = require('./images/ina/floor.jpeg');
    const paul_url = require('./images/ina/paul.jpeg');
    const luna_url = require('./images/ina/luna.jpeg');
    const tycho_url = require('./images/ina/tycho.png');
    const marit_url = require('./images/ina/marit.png');
    const kaj_url = require('./images/ina/kaj.jpeg');
    const sep_url = require('./images/ina/sep.jpeg');
    const elise_url = require('./images/ina/elise.jpeg');
    
    

    const store = f3.createStore({
        data: data(),
        node_separation: 250,
        level_separation: 150
      }),
      view = f3.d3AnimationView({
        store,
        cont: document.querySelector("#FamilyChart")
      }),
      Card = f3.elements.Card({
        store,
        svg: view.svg,
        card_dim: {
          w: 220,
          h: 70,
          text_x: 75,
          text_y: 15,
          img_w: 60,
          img_h: 60,
          img_x: 5,
          img_y: 5
        },
        card_display: [
          (d) => `${d.data["first name"] || ""} ${d.data["last name"] || ""}`,
          (d) => `${d.data["birthday"] || ""}`
        ],
        mini_tree: true,
        link_break: false
      });

    view.setCard(Card);
    store.setOnUpdate((props) => view.update(props || {}));
    store.update.tree({ initial: true });

    function data() {
      return [
          {
            "id": "0",
            "rels": {
              "spouses": [
                "0bfe5950-fc67-4e1b-bc9e-1c7408dea95b"
              ],
              "children": [
                "a606abc0-d2ec-4270-a223-db7ede7a672c",
                "2bc31938-4b98-4ba3-85dd-ca9504d694ca",
                "2f1d5fcc-1b9f-46c0-9dc6-5f35d2b20f51",
                "f34acedc-20ba-4e64-8c02-69e7f54d002f",
                "a995ba95-233a-4f24-b995-3ed1fe6b1590",
                "f9625d34-c10a-4246-acc1-115bf2acbdd3"
              ]
            },
            "data": {
              "first name": "Lambertus",
              "last name": "Sijsma",
              "birthday": "1910-1994*",
              "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg",
              "gender": "M"
            }
          },
          {
            "id": "0bfe5950-fc67-4e1b-bc9e-1c7408dea95b",
            "data": {
              "gender": "F",
              "first name": "Pieterdina",
              "last name": "de Jong",
              "birthday": "1913-2004*",
              "avatar": ""
            },
            "rels": {
              "spouses": [
                "0"
              ],
              "children": [
                "a606abc0-d2ec-4270-a223-db7ede7a672c",
                "2bc31938-4b98-4ba3-85dd-ca9504d694ca",
                "2f1d5fcc-1b9f-46c0-9dc6-5f35d2b20f51",
                "f34acedc-20ba-4e64-8c02-69e7f54d002f",
                "a995ba95-233a-4f24-b995-3ed1fe6b1590",
                "f9625d34-c10a-4246-acc1-115bf2acbdd3"
              ]
            }
          },
          {
            "id": "a606abc0-d2ec-4270-a223-db7ede7a672c",
            "data": {
              "gender": "M",
              "first name": "Epeus",
              "last name": "Sijsma",
              "birthday": "1939",
              "avatar": pe_url
            },
            "rels": {
              "mother": "0bfe5950-fc67-4e1b-bc9e-1c7408dea95b",
              "father": "0",
              "spouses": [
                "c4290316-736c-4a5d-b33d-a17294919a5a"
              ],
              "children": [
                "887edaf1-21f5-43eb-be6f-429d92bdba16",
                "010b222c-cf0b-48f6-b650-0aed0ce8907d",
                "9b716a60-6f6f-4443-b3e4-18774529c9f2"
              ]
            }
          },
          {
            "id": "2bc31938-4b98-4ba3-85dd-ca9504d694ca",
            "data": {
              "gender": "M",
              "first name": "Ane",
              "last name": "Sijsma",
              "birthday": "1941",
              "avatar": ""
            },
            "rels": {
              "mother": "0bfe5950-fc67-4e1b-bc9e-1c7408dea95b",
              "father": "0",
              "spouses": [
                "5b5e3d71-1600-4e8a-9d98-2a9282f3e9ce"
              ],
              "children": [
                "14b12059-fd7f-4be0-85a4-b619ce92df6e",
                "93b0d4b9-a00b-4aec-a80b-56106a91d27d",
                "c1177c8c-ddec-4092-8738-9340ebe04b2c"
              ]
            }
          },
          {
            "id": "2f1d5fcc-1b9f-46c0-9dc6-5f35d2b20f51",
            "data": {
              "gender": "M",
              "first name": "Sjoerd",
              "last name": "Sijsma",
              "birthday": "1937-1945*",
              "avatar": ""
            },
            "rels": {
              "mother": "0bfe5950-fc67-4e1b-bc9e-1c7408dea95b",
              "father": "0"
            }
          },
          {
            "id": "f34acedc-20ba-4e64-8c02-69e7f54d002f",
            "data": {
              "gender": "F",
              "first name": "Riea",
              "last name": "Schüller-Sijsma",
              "birthday": "1944",
              "avatar": riea_url
            },
            "rels": {
              "mother": "0bfe5950-fc67-4e1b-bc9e-1c7408dea95b",
              "father": "0",
              "spouses": [
                "bbe74156-6a86-4060-b25f-76a7f58c2aa9"
              ],
              "children": [
                "fa3e135f-46ce-45ec-86bb-8cd86a973828",
                "a05c9b3a-43a3-4aac-b8cd-a7d9bd895a2c",
                "689176e6-4ed6-4036-977a-a5a007347ee4"
              ]
            }
          },
          {
            "id": "a995ba95-233a-4f24-b995-3ed1fe6b1590",
            "data": {
              "gender": "F",
              "first name": "Marian",
              "last name": "Sijsma",
              "birthday": "1946",
              "avatar": marian_url
            },
            "rels": {
              "mother": "0bfe5950-fc67-4e1b-bc9e-1c7408dea95b",
              "father": "0",
              "spouses": [
                "182c6cb7-ddee-40d2-8949-e0ab0279596e"
              ],
              "children": [
                "3562eb28-c49a-469c-96a0-15f281ff4f7f",
                "a7e6eb5b-ab83-47bc-b8a5-f3b47a0350ea",
                "469a53d9-005f-491f-b4a2-1298fa7840fe"
              ]
            }
          },
          {
            "id": "f9625d34-c10a-4246-acc1-115bf2acbdd3",
            "data": {
              "gender": "F",
              "first name": "Ina",
              "last name": "Sijsma",
              "birthday": "1951",
              "avatar": ina_url
            },
            "rels": {
              "mother": "0bfe5950-fc67-4e1b-bc9e-1c7408dea95b",
              "father": "0",
              "spouses": [
                "e4f40ba3-35e0-497f-8ed6-c585d1032f0d"
              ],
              "children": [
                "42e5bb9e-70a6-4eed-8fe2-11c98043ed26",
                "12034a1d-3c28-4d4d-aff2-6941ae57b6d0",
                "4c37d5ac-c09d-4db6-8fb2-b15d13799d44"
              ]
            }
          },
          {
            "id": "c4290316-736c-4a5d-b33d-a17294919a5a",
            "data": {
              "gender": "F",
              "first name": "Riekje",
              "last name": "Sijsma",
              "birthday": "1940",
              "avatar": riekje_url
            },
            "rels": {
              "spouses": [
                "a606abc0-d2ec-4270-a223-db7ede7a672c"
              ],
              "children": [
                "887edaf1-21f5-43eb-be6f-429d92bdba16",
                "010b222c-cf0b-48f6-b650-0aed0ce8907d",
                "9b716a60-6f6f-4443-b3e4-18774529c9f2"
              ]
            }
          },
          {
            "id": "bbe74156-6a86-4060-b25f-76a7f58c2aa9",
            "data": {
              "gender": "M",
              "first name": "Christiaan",
              "last name": "Schüller",
              "birthday": "1940",
              "avatar": chris_url
            },
            "rels": {
              "spouses": [
                "f34acedc-20ba-4e64-8c02-69e7f54d002f"
              ],
              "children": [
                "fa3e135f-46ce-45ec-86bb-8cd86a973828",
                "a05c9b3a-43a3-4aac-b8cd-a7d9bd895a2c",
                "689176e6-4ed6-4036-977a-a5a007347ee4"
              ]
            }
          },
          {
            "id": "e4f40ba3-35e0-497f-8ed6-c585d1032f0d",
            "data": {
              "gender": "M",
              "first name": "Gerard",
              "last name": "Ploos van Amstel",
              "birthday": "1951",
              "avatar": gerard_url
            },
            "rels": {
              "spouses": [
                "f9625d34-c10a-4246-acc1-115bf2acbdd3"
              ],
              "children": [
                "42e5bb9e-70a6-4eed-8fe2-11c98043ed26",
                "12034a1d-3c28-4d4d-aff2-6941ae57b6d0",
                "4c37d5ac-c09d-4db6-8fb2-b15d13799d44"
              ]
            }
          },
          {
            "id": "5b5e3d71-1600-4e8a-9d98-2a9282f3e9ce",
            "data": {
              "gender": "F",
              "first name": "Tanja",
              "last name": "Sijsma",
              "birthday": "1946",
              "avatar": ""
            },
            "rels": {
              "spouses": [
                "2bc31938-4b98-4ba3-85dd-ca9504d694ca"
              ],
              "children": [
                "14b12059-fd7f-4be0-85a4-b619ce92df6e",
                "93b0d4b9-a00b-4aec-a80b-56106a91d27d",
                "c1177c8c-ddec-4092-8738-9340ebe04b2c"
              ]
            }
          },
          {
            "id": "182c6cb7-ddee-40d2-8949-e0ab0279596e",
            "data": {
              "gender": "M",
              "first name": "Levien",
              "last name": "Oggel",
              "birthday": "1944",
              "avatar": levien_url
            },
            "rels": {
              "spouses": [
                "a995ba95-233a-4f24-b995-3ed1fe6b1590"
              ],
              "children": [
                "3562eb28-c49a-469c-96a0-15f281ff4f7f",
                "a7e6eb5b-ab83-47bc-b8a5-f3b47a0350ea",
                "469a53d9-005f-491f-b4a2-1298fa7840fe"
              ]
            }
          },
          {
            "id": "42e5bb9e-70a6-4eed-8fe2-11c98043ed26",
            "data": {
              "gender": "M",
              "first name": "Pim",
              "last name": "Ploos van Amstel",
              "birthday": "1986",
              "avatar": pim_url
            },
            "rels": {
              "mother": "f9625d34-c10a-4246-acc1-115bf2acbdd3",
              "father": "e4f40ba3-35e0-497f-8ed6-c585d1032f0d",
              "spouses": [
                "f92c5544-bebc-4a82-ba93-c40ba0b093ff"
              ],
              "children": [
                "e630dcd8-0aed-43f6-a7c3-bde7307bc275",
                "dd39877b-1cc4-48fa-80d9-7ad454d77ef5"
              ]
            }
          },
          {
            "id": "12034a1d-3c28-4d4d-aff2-6941ae57b6d0",
            "data": {
              "gender": "F",
              "first name": "Nicolien",
              "last name": "Ploos van Amstel",
              "birthday": "1980",
              "avatar": nicolien_url
            },
            "rels": {
              "mother": "f9625d34-c10a-4246-acc1-115bf2acbdd3",
              "father": "e4f40ba3-35e0-497f-8ed6-c585d1032f0d",
              "spouses": [
                "4322aa02-0fdc-4c8c-8522-01b5a1e9f5b3"
              ],
              "children": [
                "ed266aa9-2464-4678-a031-1640faed95a6",
                "13a954c6-9559-481c-a203-e3222536e027",
                "08eb1f43-18ad-4e51-863c-6b1433797c5b",
                "49ea05da-9f84-44f9-a32b-f765947ac206"
              ]
            }
          },
          {
            "id": "4c37d5ac-c09d-4db6-8fb2-b15d13799d44",
            "data": {
              "gender": "F",
              "first name": "Floor",
              "last name": "Ploos van Amstel",
              "birthday": "1983",
              "avatar": floor_url
            },
            "rels": {
              "mother": "f9625d34-c10a-4246-acc1-115bf2acbdd3",
              "father": "e4f40ba3-35e0-497f-8ed6-c585d1032f0d",
              "spouses": [
                "3f850a27-f76b-4834-8836-005947550c0a"
              ],
              "children": [
                "c156a556-7fbb-4331-b608-fa71a41749da",
                "5de6e9fe-5e4d-459c-878a-298898d2744c",
                "accd43c4-a4e2-49b2-b081-625e8f859029"
              ]
            }
          },
          {
            "id": "fa3e135f-46ce-45ec-86bb-8cd86a973828",
            "data": {
              "gender": "M",
              "first name": "Flip",
              "last name": "Schüller",
              "birthday": "1968",
              "avatar": flip_url
            },
            "rels": {
              "mother": "f34acedc-20ba-4e64-8c02-69e7f54d002f",
              "father": "bbe74156-6a86-4060-b25f-76a7f58c2aa9",
              "spouses": [
                "f0d48ce8-2feb-4326-903f-0913bd8e3e24"
              ],
              "children": [
                "5f78cdf3-8372-481b-b8e2-904e8315c95a",
                "0f42c0a1-9e5c-43b2-88c9-ce9ef440983a"
              ]
            }
          },
          {
            "id": "a05c9b3a-43a3-4aac-b8cd-a7d9bd895a2c",
            "data": {
              "gender": "F",
              "first name": "Ira",
              "last name": "Schüller",
              "birthday": "1970",
              "avatar": ira_url
            },
            "rels": {
              "mother": "f34acedc-20ba-4e64-8c02-69e7f54d002f",
              "father": "bbe74156-6a86-4060-b25f-76a7f58c2aa9",
              "spouses": [],
              "children": [
                "c1f127b3-1de5-4ac5-b931-6df761bc85ff",
                "b8401034-b4fd-4840-ab89-084d61eb450a",
                "9b4fc7ee-1fc9-451a-93a1-e3811bbf4201"
              ]
            }
          },
          {
            "id": "689176e6-4ed6-4036-977a-a5a007347ee4",
            "data": {
              "gender": "F",
              "first name": "Jessica",
              "last name": "Schuller",
              "birthday": "1973",
              "avatar": jessica_url
            },
            "rels": {
              "mother": "f34acedc-20ba-4e64-8c02-69e7f54d002f",
              "father": "bbe74156-6a86-4060-b25f-76a7f58c2aa9",
              "spouses": [
                "71d45037-50eb-47b2-bb71-4e7fc7ad10a8",
              ],
              "children": [
                "35af9ba7-36f6-416e-83ba-2ebed75ed25e",
                "bfd576ee-c541-426e-bad5-488e0a92164e",
                "d8d59241-1f7e-4b6d-89a0-f1ee31c4795b"
              ]
            }
          },
          {
            "id": "14b12059-fd7f-4be0-85a4-b619ce92df6e",
            "data": {
              "gender": "M",
              "first name": "Sjoerd",
              "last name": "Sijsma",
              "birthday": "1967",
              "avatar": sjoerd_ane__url
            },
            "rels": {
              "mother": "5b5e3d71-1600-4e8a-9d98-2a9282f3e9ce",
              "father": "2bc31938-4b98-4ba3-85dd-ca9504d694ca",
              "spouses": [
                "ad56e980-9095-494a-8965-9c95cce7aaa4"
              ],
              "children": [
                "0cf1a802-48c4-426c-9411-f12ffc85ba85"
              ]
            }
          },
          {
            "id": "93b0d4b9-a00b-4aec-a80b-56106a91d27d",
            "data": {
              "gender": "M",
              "first name": "Auke",
              "last name": "Sijsma",
              "birthday": "1970",
              "avatar": ""
            },
            "rels": {
              "mother": "5b5e3d71-1600-4e8a-9d98-2a9282f3e9ce",
              "father": "2bc31938-4b98-4ba3-85dd-ca9504d694ca",
              "spouses": [
                "d25875b6-ec1c-41db-ae93-643739d1c7c6"
              ],
              "children": [
                "e5d41ef2-2435-4926-a860-4846a6c1c4f5",
                "fa565474-bb2c-41d6-b2c5-cbbff553cf24"
              ]
            }
          },
          {
            "id": "c1177c8c-ddec-4092-8738-9340ebe04b2c",
            "data": {
              "gender": "M",
              "first name": "Floris",
              "last name": "Sijsma",
              "birthday": "1973",
              "avatar": floris_url
            },
            "rels": {
              "mother": "5b5e3d71-1600-4e8a-9d98-2a9282f3e9ce",
              "father": "2bc31938-4b98-4ba3-85dd-ca9504d694ca",
              "spouses": [
                "4f66f079-2f2b-4513-b483-3497132d268d"
              ],
              "children": [
                "077890f7-8495-4afa-85f7-ca6af61f00f2",
                "7c59c30a-11c7-440d-a0e9-84bf4d7958d1"
              ]
            }
          },
          {
            "id": "887edaf1-21f5-43eb-be6f-429d92bdba16",
            "data": {
              "gender": "M",
              "first name": "Sjoerd",
              "last name": "Sijsma",
              "birthday": "1968",
              "avatar": ""
            },
            "rels": {
              "mother": "c4290316-736c-4a5d-b33d-a17294919a5a",
              "father": "a606abc0-d2ec-4270-a223-db7ede7a672c",
              "spouses": [
                "8a8692a5-18ca-443d-a4a2-cd76799aa44a"
              ],
              "children": [
                "600ebc11-1afd-436e-ba8e-aff743c6bbba",
                "5b1837b8-aebf-407a-be31-4f9e98b1a5e3",
                "74de9f60-e741-4974-a8ea-abfa5de286bb",
                "226a7e64-ae35-4433-a3c2-d47ae5d13a8f"
              ]
            }
          },
          {
            "id": "010b222c-cf0b-48f6-b650-0aed0ce8907d",
            "data": {
              "gender": "F",
              "first name": "Ndedi",
              "last name": "Sijsma",
              "birthday": "1975",
              "avatar": ndedi_url
            },
            "rels": {
              "mother": "c4290316-736c-4a5d-b33d-a17294919a5a",
              "father": "a606abc0-d2ec-4270-a223-db7ede7a672c",
              "spouses": [
                "01181e58-18cc-4304-92a6-eae5caa23af9"
              ]
            }
          },
          {
            "id": "8a8692a5-18ca-443d-a4a2-cd76799aa44a",
            "data": {
              "gender": "F",
              "first name": "Ünzilè",
              "last name": "Sijsma",
              "birthday": "1967",
              "avatar": ""
            },
            "rels": {
              "spouses": [
                "887edaf1-21f5-43eb-be6f-429d92bdba16"
              ],
              "children": [
                "600ebc11-1afd-436e-ba8e-aff743c6bbba",
                "5b1837b8-aebf-407a-be31-4f9e98b1a5e3",
                "74de9f60-e741-4974-a8ea-abfa5de286bb",
                "226a7e64-ae35-4433-a3c2-d47ae5d13a8f"
              ]
            }
          },
          {
            "id": "3562eb28-c49a-469c-96a0-15f281ff4f7f",
            "data": {
              "gender": "M",
              "first name": "Rutger",
              "last name": "Oggel",
              "birthday": "1972-2001*",
              "avatar": rutger_url
            },
            "rels": {
              "mother": "a995ba95-233a-4f24-b995-3ed1fe6b1590",
              "father": "182c6cb7-ddee-40d2-8949-e0ab0279596e"
            }
          },
          {
            "id": "a7e6eb5b-ab83-47bc-b8a5-f3b47a0350ea",
            "data": {
              "gender": "F",
              "first name": "Anne",
              "last name": "Oggel",
              "birthday": "1978",
              "avatar": anne_url
            },
            "rels": {
              "mother": "a995ba95-233a-4f24-b995-3ed1fe6b1590",
              "father": "182c6cb7-ddee-40d2-8949-e0ab0279596e",
              "spouses": [
                "f4abf602-de81-4002-83a3-6625573b365f"
              ],
              "children": [
                "7ddf1dcc-40d6-445a-94a0-cac772f2098e",
                "591b0057-4696-4d7c-bac1-e6e8b6b86880",
                "bbd4d985-e038-4597-a572-9311dc41e424"
              ]
            }
          },
          {
            "id": "469a53d9-005f-491f-b4a2-1298fa7840fe",
            "data": {
              "gender": "M",
              "first name": "Jochem",
              "last name": "Oggel",
              "birthday": "1974",
              "avatar": jochem_url
            },
            "rels": {
              "mother": "a995ba95-233a-4f24-b995-3ed1fe6b1590",
              "father": "182c6cb7-ddee-40d2-8949-e0ab0279596e",
              "spouses": [
                "a8650ea1-997e-40f3-a8e2-302d26f57ab1"
              ],
              "children": [
                "b5d04b3e-3365-4f34-8f96-e72b48bb2c56",
                "8324c254-289b-4a42-878b-40ba83f0e9bb"
              ]
            }
          },
          {
            "id": "71d45037-50eb-47b2-bb71-4e7fc7ad10a8",
            "data": {
              "gender": "M",
              "first name": "Mielo",
              "last name": "Pouwer",
              "birthday": "1986",
              "avatar": mielo_url
            },
            "rels": {
              "spouses": [
                "689176e6-4ed6-4036-977a-a5a007347ee4"
              ],
              "children": [
                "35af9ba7-36f6-416e-83ba-2ebed75ed25e",
                "bfd576ee-c541-426e-bad5-488e0a92164e",
                "d8d59241-1f7e-4b6d-89a0-f1ee31c4795b"
              ]
            }
          },
          {
            "id": "c1f127b3-1de5-4ac5-b931-6df761bc85ff",
            "data": {
              "gender": "M",
              "first name": "Lirry",
              "last name": "Pinter",
              "birthday": "1992",
              "avatar": lir_url
            },
            "rels": {
              "mother": "a05c9b3a-43a3-4aac-b8cd-a7d9bd895a2c"
            }
          },
          {
            "id": "b8401034-b4fd-4840-ab89-084d61eb450a",
            "data": {
              "gender": "F",
              "first name": "Sky",
              "last name": "Pinter",
              "birthday": "1996",
              "avatar": sky_url
            },
            "rels": {
              "mother": "a05c9b3a-43a3-4aac-b8cd-a7d9bd895a2c"
            }
          },
          {
            "id": "9b4fc7ee-1fc9-451a-93a1-e3811bbf4201",
            "data": {
              "gender": "M",
              "first name": "Ramses",
              "last name": "Veder",
              "birthday": "2002",
              "avatar": ramses_url
            },
            "rels": {
              "mother": "a05c9b3a-43a3-4aac-b8cd-a7d9bd895a2c"
            }
          },
          {
            "id": "f0d48ce8-2feb-4326-903f-0913bd8e3e24",
            "data": {
              "gender": "F",
              "first name": "Hedy",
              "last name": "van Erp",
              "birthday": "1966",
              "avatar": hedy_url
            },
            "rels": {
              "spouses": [
                "fa3e135f-46ce-45ec-86bb-8cd86a973828"
              ],
              "children": [
                "5f78cdf3-8372-481b-b8e2-904e8315c95a",
                "0f42c0a1-9e5c-43b2-88c9-ce9ef440983a"
              ]
            }
          },
          {
            "id": "35af9ba7-36f6-416e-83ba-2ebed75ed25e",
            "data": {
              "gender": "M",
              "first name": "Luka",
              "last name": "van Munster",
              "birthday": "1996",
              "avatar": luka_url
            },
            "rels": {
              "father": "71d45037-50eb-47b2-bb71-4e7fc7ad10a8",
              "mother": "689176e6-4ed6-4036-977a-a5a007347ee4"
            }
          },
          {
            "id": "bfd576ee-c541-426e-bad5-488e0a92164e",
            "data": {
              "gender": "F",
              "first name": "Chloe",
              "last name": "van Munster",
              "birthday": "2000",
              "avatar": chloe_url
            },
            "rels": {
              "father": "71d45037-50eb-47b2-bb71-4e7fc7ad10a8",
              "mother": "689176e6-4ed6-4036-977a-a5a007347ee4"
            }
          },
          {
            "id": "d8d59241-1f7e-4b6d-89a0-f1ee31c4795b",
            "data": {
              "gender": "M",
              "first name": "Sam",
              "last name": "van Munster",
              "birthday": "2005",
              "avatar": sam_url
            },
            "rels": {
              "father": "71d45037-50eb-47b2-bb71-4e7fc7ad10a8",
              "mother": "689176e6-4ed6-4036-977a-a5a007347ee4"
            }
          },
          {
            "id": "5f78cdf3-8372-481b-b8e2-904e8315c95a",
            "data": {
              "gender": "F",
              "first name": "Mila",
              "last name": "van Erp",
              "birthday": "1999",
              "avatar": mila_url
            },
            "rels": {
              "mother": "f0d48ce8-2feb-4326-903f-0913bd8e3e24",
              "father": "fa3e135f-46ce-45ec-86bb-8cd86a973828"
            }
          },
          {
            "id": "0f42c0a1-9e5c-43b2-88c9-ce9ef440983a",
            "data": {
              "gender": "F",
              "first name": "Fay",
              "last name": "van Erp",
              "birthday": "2002",
              "avatar": fay_url
            },
            "rels": {
              "mother": "f0d48ce8-2feb-4326-903f-0913bd8e3e24",
              "father": "fa3e135f-46ce-45ec-86bb-8cd86a973828"
            }
          },
          {
            "id": "600ebc11-1afd-436e-ba8e-aff743c6bbba",
            "data": {
              "gender": "F",
              "first name": "Royèm",
              "last name": "Sijsma",
              "birthday": "1993",
              "avatar": ""
            },
            "rels": {
              "mother": "8a8692a5-18ca-443d-a4a2-cd76799aa44a",
              "father": "887edaf1-21f5-43eb-be6f-429d92bdba16"
            }
          },
          {
            "id": "5b1837b8-aebf-407a-be31-4f9e98b1a5e3",
            "data": {
              "gender": "M",
              "first name": "Rokay",
              "last name": "Sijsma",
              "birthday": "1995",
              "avatar": ""
            },
            "rels": {
              "mother": "8a8692a5-18ca-443d-a4a2-cd76799aa44a",
              "father": "887edaf1-21f5-43eb-be6f-429d92bdba16"
            }
          },
          {
            "id": "74de9f60-e741-4974-a8ea-abfa5de286bb",
            "data": {
              "gender": "F",
              "first name": "Isis",
              "last name": "Sijsma",
              "birthday": "2003",
              "avatar": ""
            },
            "rels": {
              "mother": "8a8692a5-18ca-443d-a4a2-cd76799aa44a",
              "father": "887edaf1-21f5-43eb-be6f-429d92bdba16"
            }
          },
          {
            "id": "226a7e64-ae35-4433-a3c2-d47ae5d13a8f",
            "data": {
              "gender": "M",
              "first name": "Cas",
              "last name": "Sijsma",
              "birthday": "2004",
              "avatar": ""
            },
            "rels": {
              "mother": "8a8692a5-18ca-443d-a4a2-cd76799aa44a",
              "father": "887edaf1-21f5-43eb-be6f-429d92bdba16"
            }
          },
          {
            "id": "9b716a60-6f6f-4443-b3e4-18774529c9f2",
            "data": {
              "gender": "F",
              "first name": "Ruth",
              "last name": "Sijsma",
              "birthday": "1966",
              "avatar": ruth_url
            },
            "rels": {
              "mother": "c4290316-736c-4a5d-b33d-a17294919a5a",
              "father": "a606abc0-d2ec-4270-a223-db7ede7a672c",
              "spouses": [
                "6d444b59-7e38-440d-9ad0-f43b341a03cc"
              ],
              "children": [
                "6921e4c8-299f-4fb0-9c26-57aaa536a2a5",
                "a8d5a767-645f-46b2-863a-8d3fd4a98e76"
              ]
            }
          },
          {
            "id": "e630dcd8-0aed-43f6-a7c3-bde7307bc275",
            "data": {
              "gender": "M",
              "first name": "Cees",
              "last name": "Ploos van Amstel",
              "birthday": "2021",
              "avatar": cees_url
            },
            "rels": {
              "mother": "f92c5544-bebc-4a82-ba93-c40ba0b093ff",
              "father": "42e5bb9e-70a6-4eed-8fe2-11c98043ed26"
            }
          },
          {
            "id": "f92c5544-bebc-4a82-ba93-c40ba0b093ff",
            "data": {
              "gender": "F",
              "first name": "Elise",
              "last name": "Reuvers",
              "birthday": "1989",
              "avatar": elise_url
            },
            "rels": {
              "spouses": [
                "42e5bb9e-70a6-4eed-8fe2-11c98043ed26"
              ],
              "children": [
                "e630dcd8-0aed-43f6-a7c3-bde7307bc275",
                "dd39877b-1cc4-48fa-80d9-7ad454d77ef5"
              ]
            }
          },
          {
            "id": "dd39877b-1cc4-48fa-80d9-7ad454d77ef5",
            "data": {
              "gender": "F",
              "first name": "Evi",
              "last name": "Ploos van Amstel",
              "birthday": "2018",
              "avatar": evi_url
            },
            "rels": {
              "mother": "f92c5544-bebc-4a82-ba93-c40ba0b093ff",
              "father": "42e5bb9e-70a6-4eed-8fe2-11c98043ed26"
            }
          },
          {
            "id": "4322aa02-0fdc-4c8c-8522-01b5a1e9f5b3",
            "data": {
              "gender": "M",
              "first name": "Martijn",
              "last name": "Wienia",
              "birthday": "1979",
              "avatar": martijn_url
            },
            "rels": {
              "spouses": [
                "12034a1d-3c28-4d4d-aff2-6941ae57b6d0"
              ],
              "children": [
                "ed266aa9-2464-4678-a031-1640faed95a6",
                "13a954c6-9559-481c-a203-e3222536e027",
                "08eb1f43-18ad-4e51-863c-6b1433797c5b",
                "49ea05da-9f84-44f9-a32b-f765947ac206"
              ]
            }
          },
          {
            "id": "3f850a27-f76b-4834-8836-005947550c0a",
            "data": {
              "gender": "M",
              "first name": "Paul",
              "last name": "van der Meer",
              "birthday": "1982",
              "avatar": paul_url
            },
            "rels": {
              "spouses": [
                "4c37d5ac-c09d-4db6-8fb2-b15d13799d44"
              ],
              "children": [
                "c156a556-7fbb-4331-b608-fa71a41749da",
                "5de6e9fe-5e4d-459c-878a-298898d2744c",
                "accd43c4-a4e2-49b2-b081-625e8f859029"
              ]
            }
          },
          {
            "id": "c156a556-7fbb-4331-b608-fa71a41749da",
            "data": {
              "gender": "M",
              "first name": "Sep",
              "last name": "van der Meer",
              "birthday": "2017",
              "avatar": sep_url
            },
            "rels": {
              "father": "3f850a27-f76b-4834-8836-005947550c0a",
              "mother": "4c37d5ac-c09d-4db6-8fb2-b15d13799d44"
            }
          },
          {
            "id": "5de6e9fe-5e4d-459c-878a-298898d2744c",
            "data": {
              "gender": "M",
              "first name": "Kaj",
              "last name": "van der Meer",
              "birthday": "2015",
              "avatar": kaj_url
            },
            "rels": {
              "father": "3f850a27-f76b-4834-8836-005947550c0a",
              "mother": "4c37d5ac-c09d-4db6-8fb2-b15d13799d44"
            }
          },
          {
            "id": "ed266aa9-2464-4678-a031-1640faed95a6",
            "data": {
              "gender": "M",
              "first name": "Tycho",
              "last name": "Wienia",
              "birthday": "2012",
              "avatar": tycho_url
            },
            "rels": {
              "father": "4322aa02-0fdc-4c8c-8522-01b5a1e9f5b3",
              "mother": "12034a1d-3c28-4d4d-aff2-6941ae57b6d0"
            }
          },
          {
            "id": "13a954c6-9559-481c-a203-e3222536e027",
            "data": {
              "gender": "F",
              "first name": "Marit",
              "last name": "Wienia",
              "birthday": "2014",
              "avatar": marit_url
            },
            "rels": {
              "father": "4322aa02-0fdc-4c8c-8522-01b5a1e9f5b3",
              "mother": "12034a1d-3c28-4d4d-aff2-6941ae57b6d0"
            }
          },
          {
            "id": "08eb1f43-18ad-4e51-863c-6b1433797c5b",
            "data": {
              "gender": "M",
              "first name": "Nils",
              "last name": "Wienia",
              "birthday": "2016",
              "avatar": nils_url
            },
            "rels": {
              "father": "4322aa02-0fdc-4c8c-8522-01b5a1e9f5b3",
              "mother": "12034a1d-3c28-4d4d-aff2-6941ae57b6d0"
            }
          },
          {
            "id": "49ea05da-9f84-44f9-a32b-f765947ac206",
            "data": {
              "gender": "F",
              "first name": "Elin",
              "last name": "Wienia",
              "birthday": "2018",
              "avatar": elin_url
            },
            "rels": {
              "father": "4322aa02-0fdc-4c8c-8522-01b5a1e9f5b3",
              "mother": "12034a1d-3c28-4d4d-aff2-6941ae57b6d0"
            }
          },
          {
            "id": "accd43c4-a4e2-49b2-b081-625e8f859029",
            "data": {
              "gender": "F",
              "first name": "Luna",
              "last name": "van der Meer",
              "birthday": "2022*",
              "avatar": luna_url
            },
            "rels": {
              "father": "3f850a27-f76b-4834-8836-005947550c0a",
              "mother": "4c37d5ac-c09d-4db6-8fb2-b15d13799d44"
            }
          },
          {
            "id": "6d444b59-7e38-440d-9ad0-f43b341a03cc",
            "data": {
              "gender": "M",
              "first name": "Titus",
              "last name": "Fekkes",
              "birthday": "1963",
              "avatar": titus_url
            },
            "rels": {
              "spouses": [
                "9b716a60-6f6f-4443-b3e4-18774529c9f2"
              ],
              "children": [
                "6921e4c8-299f-4fb0-9c26-57aaa536a2a5",
                "a8d5a767-645f-46b2-863a-8d3fd4a98e76"
              ]
            }
          },
          {
            "id": "6921e4c8-299f-4fb0-9c26-57aaa536a2a5",
            "data": {
              "gender": "M",
              "first name": "Jelle",
              "last name": "Fekkes",
              "birthday": "2006",
              "avatar": jell_url
            },
            "rels": {
              "father": "6d444b59-7e38-440d-9ad0-f43b341a03cc",
              "mother": "9b716a60-6f6f-4443-b3e4-18774529c9f2"
            }
          },
          {
            "id": "d25875b6-ec1c-41db-ae93-643739d1c7c6",
            "data": {
              "gender": "F",
              "first name": "Nathalie",
              "last name": "Sijsma",
              "birthday": "1969",
              "avatar": ""
            },
            "rels": {
              "spouses": [
                "93b0d4b9-a00b-4aec-a80b-56106a91d27d"
              ],
              "children": [
                "e5d41ef2-2435-4926-a860-4846a6c1c4f5",
                "fa565474-bb2c-41d6-b2c5-cbbff553cf24"
              ]
            }
          },
          {
            "id": "e5d41ef2-2435-4926-a860-4846a6c1c4f5",
            "data": {
              "gender": "F",
              "first name": "Isa",
              "last name": "Sijsma",
              "birthday": "2002",
              "avatar": ""
            },
            "rels": {
              "mother": "d25875b6-ec1c-41db-ae93-643739d1c7c6",
              "father": "93b0d4b9-a00b-4aec-a80b-56106a91d27d"
            }
          },
          {
            "id": "fa565474-bb2c-41d6-b2c5-cbbff553cf24",
            "data": {
              "gender": "F",
              "first name": "Lara",
              "last name": "Sijsma",
              "birthday": "2003",
              "avatar": ""
            },
            "rels": {
              "mother": "d25875b6-ec1c-41db-ae93-643739d1c7c6",
              "father": "93b0d4b9-a00b-4aec-a80b-56106a91d27d"
            }
          },
          {
            "id": "01181e58-18cc-4304-92a6-eae5caa23af9",
            "data": {
              "gender": "M",
              "first name": "Casper",
              "last name": "Polman",
              "birthday": "1973",
              "avatar": casper_url
            },
            "rels": {
              "spouses": [
                "010b222c-cf0b-48f6-b650-0aed0ce8907d"
              ]
            }
          },
          {
            "id": "4f66f079-2f2b-4513-b483-3497132d268d",
            "data": {
              "gender": "F",
              "first name": "Barbara",
              "last name": "Sijsma",
              "birthday": "1978",
              "avatar": barbara_url
            },
            "rels": {
              "spouses": [
                "c1177c8c-ddec-4092-8738-9340ebe04b2c"
              ],
              "children": [
                "077890f7-8495-4afa-85f7-ca6af61f00f2",
                "7c59c30a-11c7-440d-a0e9-84bf4d7958d1"
              ]
            }
          },
          {
            "id": "ad56e980-9095-494a-8965-9c95cce7aaa4",
            "data": {
              "gender": "F",
              "first name": "Shirley",
              "last name": "Sijsma",
              "birthday": "1968",
              "avatar": shirley_url
            },
            "rels": {
              "spouses": [
                "14b12059-fd7f-4be0-85a4-b619ce92df6e"
              ],
              "children": [
                "0cf1a802-48c4-426c-9411-f12ffc85ba85"
              ]
            }
          },
          {
            "id": "0cf1a802-48c4-426c-9411-f12ffc85ba85",
            "data": {
              "gender": "F",
              "first name": "Noor",
              "last name": "Sijsma",
              "birthday": "2011",
              "avatar": noor_url
            },
            "rels": {
              "mother": "ad56e980-9095-494a-8965-9c95cce7aaa4",
              "father": "14b12059-fd7f-4be0-85a4-b619ce92df6e"
            }
          },
          {
            "id": "a8d5a767-645f-46b2-863a-8d3fd4a98e76",
            "data": {
              "gender": "M",
              "first name": "Teun",
              "last name": "Fekkes",
              "birthday": "2008",
              "avatar": teun_url
            },
            "rels": {
              "father": "6d444b59-7e38-440d-9ad0-f43b341a03cc",
              "mother": "9b716a60-6f6f-4443-b3e4-18774529c9f2"
            }
          },
          {
            "id": "077890f7-8495-4afa-85f7-ca6af61f00f2",
            "data": {
              "gender": "F",
              "first name": "Philine",
              "last name": "Sijsma",
              "birthday": "2009",
              "avatar": philine_url
            },
            "rels": {
              "mother": "4f66f079-2f2b-4513-b483-3497132d268d",
              "father": "c1177c8c-ddec-4092-8738-9340ebe04b2c"
            }
          },
          {
            "id": "7c59c30a-11c7-440d-a0e9-84bf4d7958d1",
            "data": {
              "gender": "M",
              "first name": "Jagger",
              "last name": "Sijsma",
              "birthday": "2011",
              "avatar": jagger_url
            },
            "rels": {
              "mother": "4f66f079-2f2b-4513-b483-3497132d268d",
              "father": "c1177c8c-ddec-4092-8738-9340ebe04b2c"
            }
          },
          {
            "id": "b5d04b3e-3365-4f34-8f96-e72b48bb2c56",
            "data": {
              "gender": "F",
              "first name": "Franka",
              "last name": "Oggel",
              "birthday": "2009",
              "avatar": franka_url
            },
            "rels": {
              "mother": "a8650ea1-997e-40f3-a8e2-302d26f57ab1",
              "father": "469a53d9-005f-491f-b4a2-1298fa7840fe"
            }
          },
          {
            "id": "a8650ea1-997e-40f3-a8e2-302d26f57ab1",
            "data": {
              "gender": "F",
              "first name": "Heleen",
              "last name": "Klausen",
              "birthday": "1974",
              "avatar": heleen_url
            },
            "rels": {
              "spouses": [
                "469a53d9-005f-491f-b4a2-1298fa7840fe"
              ],
              "children": [
                "b5d04b3e-3365-4f34-8f96-e72b48bb2c56",
                "8324c254-289b-4a42-878b-40ba83f0e9bb"
              ]
            }
          },
          {
            "id": "7ddf1dcc-40d6-445a-94a0-cac772f2098e",
            "data": {
              "gender": "F",
              "first name": "Oliva",
              "last name": "Oggel",
              "birthday": "2017",
              "avatar": oliva_url
            },
            "rels": {
              "father": "f4abf602-de81-4002-83a3-6625573b365f",
              "mother": "a7e6eb5b-ab83-47bc-b8a5-f3b47a0350ea"
            }
          },
          {
            "id": "f4abf602-de81-4002-83a3-6625573b365f",
            "data": {
              "gender": "M",
              "first name": "Yago",
              "last name": "Carvajal Martinez",
              "birthday": "1972",
              "avatar": yago_url
            },
            "rels": {
              "spouses": [
                "a7e6eb5b-ab83-47bc-b8a5-f3b47a0350ea"
              ],
              "children": [
                "7ddf1dcc-40d6-445a-94a0-cac772f2098e",
                "591b0057-4696-4d7c-bac1-e6e8b6b86880",
                "bbd4d985-e038-4597-a572-9311dc41e424"
              ]
            }
          },
          {
            "id": "591b0057-4696-4d7c-bac1-e6e8b6b86880",
            "data": {
              "gender": "M",
              "first name": "Bas",
              "last name": "Oggel",
              "birthday": "2014",
              "avatar": bas_url
            },
            "rels": {
              "father": "f4abf602-de81-4002-83a3-6625573b365f",
              "mother": "a7e6eb5b-ab83-47bc-b8a5-f3b47a0350ea"
            }
          },
          {
            "id": "8324c254-289b-4a42-878b-40ba83f0e9bb",
            "data": {
              "gender": "F",
              "first name": "Janne",
              "last name": "Oggel",
              "birthday": "2011",
              "avatar": janne_url
            },
            "rels": {
              "mother": "a8650ea1-997e-40f3-a8e2-302d26f57ab1",
              "father": "469a53d9-005f-491f-b4a2-1298fa7840fe"
            }
          },
          {
            "id": "bbd4d985-e038-4597-a572-9311dc41e424",
            "data": {
              "gender": "F",
              "first name": "Eva",
              "last name": "Sillevis Smitt ",
              "birthday": "2007",
              "avatar": eva_url
            },
            "rels": {
              "father": "f4abf602-de81-4002-83a3-6625573b365f",
              "mother": "a7e6eb5b-ab83-47bc-b8a5-f3b47a0350ea"
            }
          }
      ];
    }
  }

  render() {
    return <div className="f3" id="FamilyChart" ref={this.cont}></div>;
  }
}
