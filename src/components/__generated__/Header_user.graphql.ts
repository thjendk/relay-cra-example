/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Header_user = {
    readonly name: string | null;
    readonly " $refType": "Header_user";
};
export type Header_user$data = Header_user;
export type Header_user$key = {
    readonly " $data"?: Header_user$data;
    readonly " $fragmentRefs": FragmentRefs<"Header_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Header_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User"
};
(node as any).hash = '0a79eef1328e77e022a27201fe1df44d';
export default node;
