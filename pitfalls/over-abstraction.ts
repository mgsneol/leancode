class DataService {
  fetchData(): Promise<string> {
    return Promise.resolve("data");
  }
}

class BusinessLogic {
  constructor(private dataService: DataService) {}

  processData(): Promise<string> {
    return this.dataService.fetchData().then((data) => `processed ${data}`);
  }
}

class PresentationLayer {
  constructor(private businessLogic: BusinessLogic) {}

  render(): void {
    this.businessLogic.processData().then((result) => console.log(result));
  }
}

const dataService = new DataService();
const businessLogic = new BusinessLogic(dataService);
const presentationLayer = new PresentationLayer(businessLogic);
presentationLayer.render();

// much better
function fetchData(): Promise<string> {
  return Promise.resolve("data");
}

function processData(): Promise<string> {
  return fetchData().then((data) => `processed ${data}`);
}

processData().then((result) => console.log(result));
