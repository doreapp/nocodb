function loadingEnvironmentBaseConfig() {
  try {
    return JSON.parse(process.env.NC_CUSTOM_CONFIG || '{}')
  } catch (error) {
    console.error('Error loading environment base config', error)
    return {}
  }
}

export type CustomConfig = Readonly<{
  showBranding: boolean
}>

const defaultConfig: CustomConfig = {
  showBranding: false,
}

const environmentBaseConfig = loadingEnvironmentBaseConfig()

export const customConfig: CustomConfig = {
  ...defaultConfig,
  ...environmentBaseConfig,
}
