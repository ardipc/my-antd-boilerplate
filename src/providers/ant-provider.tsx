import { ConfigProvider } from "antd"
import { ReactNode } from "react"

const theme = {
  token: {
    // Seed Token
    colorPrimary: '#00b96b',
    borderRadius: 2,

    // Alias Token
    colorBgContainer: '#f6ffed',
  },
}

export default function AntProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider theme={theme}>
      {children}
    </ConfigProvider>
  )
}