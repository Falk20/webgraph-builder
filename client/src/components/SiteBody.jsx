import React, { Component } from 'react';
import vis from 'vis-network';

let nodesArray = [
    { id: 1, label: 'yandex.ru', url: 'https://yandex.ru/' },
    { id: 2, label: 'yandex.ru/maps', url: 'https://yandex.ru/maps' },
    { id: 3, label: 'node 3' },
    { id: 4, label: 'node 4' },
    { id: 5, label: 'node 5' }
];

let edgesArray = [
    {
        from: 1,
        to: 2,    
    },
    {
        from: 3,
        to: 1,      
    },
    {
        from: 1,
        to: 4,       
    },
    {
        from: 3,
        to: 5,     
    }
];

let nodes = new vis.DataSet(nodesArray);

let edges = new vis.DataSet(edgesArray.map(edge=>{
    edge.arrows = 'to';
    return edge;
}));

let data = {
    nodes: nodes,
    edges: edges
};

let options = {};

let network;

export default class SiteBody extends Component {
    onClick = (e) => {
        network = new vis.Network(e.target.nextElementSibling, data, options);

        network.on('click', function (params) {
            let currentNode = nodesArray.find(elem => elem.id === this.getNodeAt(params.pointer.DOM));

            if (currentNode !== undefined) {
                window.open(currentNode.url);
            }
        });
    }
    render() {
        return (
            <main>
                <a className="start-build-graph" onClick={this.onClick}>Click me!</a>
                <div id="mynet"></div>
            </main>
        )
    }
}