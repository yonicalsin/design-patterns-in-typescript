class Connection {
   private static instance: Connection;
   private constructor() {}
   public static getInstance() {
      if (this.instance == null) {
         this.instance = new Connection();
      }
      return this.instance;
   }
   public connect(): void {
      console.log('Connected !');
   }
   public disconnect(): void {
      console.log('Disconnect !');
   }
}

const con = Connection.getInstance();
con.connect();
con.disconnect();

console.log(con instanceof Connection); // true
