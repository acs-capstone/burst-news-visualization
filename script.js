const data = [
    { source: 'Baratheon', target: 'Lannister' },
    { source: 'Baratheon', target: 'Stark' },
    { source: 'Lannister', target: 'Stark' },
    { source: 'Stark', target: 'Bolton' }
]

const links = data

const nodes = {}

// compute nodes from links data
links.forEach(function(link) {
    link.source =
        nodes[link.source] || (nodes[link.source] = { name: link.source })
    link.target =
        nodes[link.target] || (nodes[link.target] = { name: link.target })
})