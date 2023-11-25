//import { clientInfoMock } from "../mocks";
import { MonoClientInfo } from "../types";

class MonoClient {
  token: string;

  constructor() {
    this.token = process.env.REACT_APP_MONO_TOKEN as string;
  }

  async getClientInfo(): Promise<MonoClientInfo | undefined> {
    try {
      const response = await new Promise<Response>((resolve, reject) => {
        setTimeout(() => {
          const mockResponse = {
            json: () => Promise.resolve({
              name: "John Doe",
              accounts: [
                {
                  id: "123456789",
                  balance: 100,
                  creditLimit: 1000,
                  currencyCode: 980,
                  cashbackType: "UAH",
                  type: "black",
                  iban: "UA123456789",
                },
                {
                  id: "987654321",
                  balance: 100,
                  currencyCode: 980,
                  cashbackType: "UAH",
                  type: "white",
                  iban: "UA987654321",
                },
              ],
            })
          };

          resolve(mockResponse as Response);
        }, 100);
      });

      //const response = await fetch("https://api.monobank.ua/personal/client-info", {
      //  //@ts-ignore
      //  headers: {
      //    "X-Token": this.token
      //  }
      //});
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}

export const monoClient = new MonoClient();
