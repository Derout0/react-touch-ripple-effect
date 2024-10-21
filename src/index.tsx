import { createRoot } from 'react-dom/client'
import { Button } from "@/Button/Button";
import { HStack } from "@/Stack";


const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
    <HStack>
        <Button>Ripple</Button>
    </HStack>
)
