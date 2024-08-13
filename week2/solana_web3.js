import {Keypair} from "@solana/web3.js";
import { verify } from "crypto";
import nacl from "tweetnacl";

//generating a new keypair

const keypair = Keypair.generate();

const publicKey = keypair.publicKey.toString();
const secretKey= keypair.secretKey;

//display the keys

console.log("Public Key",publicKey);
console.log("Private Key(Secret Key):",secretKey);

//convert the word hello world to a uint8array
const message = new TextEncoder().encode("hello world");

const signature = nacl.sign.detached(message,secretKey);

const result = nacl.sign.detached.verify(
    message,
    message,
    keypair.publicKey.toBytes(),
)
console.log(result);