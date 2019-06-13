import React from 'react';
import './App.css';

const App = (props) => {
  const json = {

    "UI": {

      "baseType": "App",

      "children": [

        {

          "baseType": "TextField",

          "props": {

          }

        },

        {

          "baseType": "Divider",

          "props": {

          }

        },

        {

          "baseType": "Card",

          "children": [

            {

              "baseType": "CardHeader",

              "props": {

                "title": "URL Avatar",

                "subtitle": "Subtitle",

                "avatar": "Sample Avatar"

              }

            },

            {

              "baseType": "CardTitle",

              "props": {

                "title": "card title",

                "subtitle": "sub title"

              }

            },

            {

              "baseType": "CardText",

              "props": {

                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat."

              }

            },

            {

              "baseType": "CardActions",

              "children": [

                {

                  "baseType": "FlatButton",

                  "props": {

                    "label": "Action 1"

                  }

                },

                {

                  "baseType": "FlatButton",

                  "props": {

                    "label": "Action 1"

                  }

                }

              ]

            }

          ]

        }

      ]

    }

  }

  const createComponent = (json, arr = []) => {
    for (let obj of json) {

      if (obj.hasOwnProperty("children")) {
        arr.push(
          <obj.baseType
            className="json-nodes"
            basetype={obj.baseType}
            key={obj.baseType}
            {...props} >{obj.baseType}{createComponent(obj["children"])}</obj.baseType>
        );
      } else {
        arr.push(
            <obj.baseType 
            className="json-nodes" 
            basetype={obj.baseType} 
            {...props}
            key={obj.baseType}
            {...props} >{obj.baseType}</obj.baseType>
        );
      }

    }

    return arr;
    // return json.map((obj) => {
    //   if (obj.hasOwnProperty("children")) {
    //     return createComponent(obj["children"]);
    //   }
    //   return (
    //     <div basetype={obj.baseType} {...props} key={obj.baseType}>{obj.baseType}</div>
    //   )
    // });
  }
  return (
    <div className="App">
      {
        createComponent(json["UI"]["children"])
      }
    </div>
  );
}

export default App;
