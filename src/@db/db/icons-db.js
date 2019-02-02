
import mock from './../mock';
const iconsDB = [
 {
    "order"    : 2732,
    "id"       : 12,
    "name"     : "widgets",
    "prevSize" : 32,
    "code"     : 60648,
    "ligatures": "widgets",
    "tags"     : ["widgets"]
}
];
mock.onGet('/api/icons').reply((config) => {
    return [200, iconsDB];
});