import eth from 'k6/x/ethereum';
import exec from 'k6/execution';

export const options = {
  iterations: 4,
  VUS: 4,
};

const root_address = "0x85da99c8a7c2c95964c8efd687e95e632fc533d6";

var client

export function setup() {
    console.log(eth.Premine())
}

export default function (data) {
    if (client == null) {
        client = new eth.Client()
    }

    client.print()
}
