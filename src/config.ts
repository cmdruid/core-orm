import { CmdConfig, CoreConfig } from './types/config.js'

export const CORE_DEFAULTS : CoreConfig = {
  debug       : false,
  isolated    : false,
  network     : 'regtest',
  peer_port   : 18442,
  rpc_port    : 18443,
  timeout     : 5000,
  use_faucet  : true,
  verbose     : true,
  params      : [],
  core_params : [],
  cli_params  : []
}

export const CMD_DEFAULTS : CmdConfig = {
  cache  : false,
  params : []
}

export function core_config (
  config : Partial<CoreConfig> = {}
) : CoreConfig {
  const { confpath, corepath, clipath, datapath } = config
  config.confpath = resolve_path(confpath)
  config.corepath = resolve_path(corepath)
  config.clipath  = resolve_path(clipath)
  config.datapath = resolve_path(datapath)
  return { ...CORE_DEFAULTS, ...config }
}

export function cmd_config (
  config : Partial<CmdConfig> = {}
) : CmdConfig {
  return { ...CMD_DEFAULTS, ...config }
}

function resolve_path (path ?: string) {
  return (typeof path === 'string' && !path.startsWith('/'))
    ? process.cwd() + '/' + path
    : path
}
