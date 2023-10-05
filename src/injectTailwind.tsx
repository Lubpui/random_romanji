import { StyledEngineProvider } from "@mui/material/styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function InjectTailwind({ children }: any) {
    return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
}
