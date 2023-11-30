import net from "net";

const IP = "localhost";
const PORT = 50541;

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: PONGMATUE");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };
