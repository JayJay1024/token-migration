import { providers } from "ethers";

export interface ApiCtx {
  isSupported: boolean;
  accounts: string[];
  provider: providers.Web3Provider | undefined;

  setAccounts: (acs: string[]) => void;
}

export enum ChainName {
  CrabSmartChain = "Crab Smart Chain",
  PangolinSmartChain = "Pangolin Smart Chain",
}

export enum TokenSymbol {
  XWRing = "xWRING",
  XWORing = "xWORING",
  CKton = "CKTON",
  PKton = "PKTON",
  XRingClassic = "xRING(Classic)",
  XORingClassic = "xORING(Classic)",
  WCKtonClassic = "WCKTON(Classic)",
  WPKtonClassic = "WPKTON(Classic)",
}

interface AddEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency?: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored.
}

interface TokenInfo {
  name: string;
  symbol: string;
  decimals: number;
  iconSrc: string;
  contractAddress?: string;
  disable?: boolean;
}

export interface ConfigData {
  logoSrc: string;
  chainParam: AddEthereumChainParameter;
  migrations: {
    from: TokenInfo;
    to: TokenInfo;
  }[];
  isTextNet?: boolean;
}
