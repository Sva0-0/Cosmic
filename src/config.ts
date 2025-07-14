import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Cosmic Nexus",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr10wf7eu7mrurc9cpmvdf4qq7m9wp7c3ftskw5jggpuy760llma3pqrvy22s",
            cw20: "andr1zz030gahtsmxhhrjxwqpm2gqg5zuf65m5pjaw7lrsz0gkzqnr0qqmt0y7n",
            name: "Cosmic Nexus",
            type: ICollectionType.EXCHANGE,
            id: "cosmic-exchange",
        },
    ],
};

export default CONFIG;
