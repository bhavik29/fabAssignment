import React from 'react';
import './App.css';

const TextField = (props) => {
  return (
    <div className={props.className}>{props.baseType}{props.children}</div>
  );
}

const Divider = (props) => {
  return (
    <div className={props.className}>{props.baseType}{props.children}</div>
  );
}

const Card = (props) => {
  return (
    <div className={props.className}>{props.baseType}{props.children}</div>
  );
}

const CardHeader = (props) => {
  return (
    <div className={props.className}>{props.baseType}{props.children}</div>
  );
}

const CardTitle = (props) => {
  return (
    <div className={props.className}>{props.baseType}{props.children}</div>
  );
}

const CardText = (props) => {
  return (
    <div className={props.className}>{props.baseType}{props.children}</div>
  );
}

const CardActions = (props) => {
  return (
    <div className={props.className}>{props.baseType}{props.children}</div>
  );
}

const FlatButton = (props) => {
  return (
    <div className={props.className}>{props.baseType}{props.children}</div>
  );
}

const App = (props) => {
  const components = {
    TextField,
    Divider,
    Card,
    CardHeader,
    CardTitle,
    CardText,
    CardActions,
    FlatButton
  };

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
        let childArr = createComponent(obj["children"]);

        arr.push(
          React.createElement(
            components[obj.baseType],
            { className: "json-nodes", key: obj.baseType, baseType: obj.baseType, props: { ...obj.props } },
            [...childArr]
          )
        );
      } else {
        arr.push(
          React.createElement(
            components[obj.baseType],
            { className: "json-nodes", key: obj.baseType, baseType: obj.baseType, props: { ...obj.props } }
          )
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
