import URL from 'url-parse';

const keys = Object.keys(new URL());

const methods = [
    {
        type: 'parse',
        value: (...i) => new URL(...i),
    },
    {
        type: 'set',
        value: (comps, initial) => Object.keys(comps).reduce((o, i) => {
            return o.set(i, comps[i])
        }, new URL(initial)).toString(),
    },
    ...keys.map(type => ({
        type,
        value: (...i) => new URL(...i)[type]
    }))
];

export default methods;
