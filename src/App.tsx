import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AllRoutes } from "./core/routes";

import "./style/tailwind.css";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AllRoutes />
    </QueryClientProvider>
  );
};

export default App;
