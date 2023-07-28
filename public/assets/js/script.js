console.log("Script-Log: crack_server - script is initialised")


fetch("/api/version")
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      document.getElementById("version").innerHTML = data;
    }
  })
  .catch((error) => {
    console.log("Error-log:", error);
    document.getElementById("version").innerHTML = 0;
  });

fetch("/api/lastpatch")
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      document.getElementById("lastpatch").innerHTML = data;
    }
  })
  .catch((error) => {
    console.log("Error-log:", error);
    document.getElementById("lastpatch").innerHTML = "";
  });

fetch("/api/getmotd")
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      document.getElementById("motd").innerHTML = data;
    }
  })
  .catch((error) => {
    console.log("Error-log:", error);
    document.getElementById("motd").innerHTML = "";
  });

fetch("/api/checkSync")
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      document.getElementById("sync").innerHTML = data;
    }
  })
  .catch((error) => {
    console.log("Error-log:", error);
    document.getElementById("sync").innerHTML = "";
  });

fetch("/jsondata/getKeys")
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      // vmware
      document.getElementById("keys_vmware_v9").innerHTML = JSON.stringify(
        data.vmware.v9
      );
      document.getElementById("keys_vmware_v10").innerHTML = JSON.stringify(
        data.vmware.v10
      );
      document.getElementById("keys_vmware_v11").innerHTML = JSON.stringify(
        data.vmware.v11
      );
      document.getElementById("keys_vmware_v12").innerHTML = JSON.stringify(
        data.vmware.v12
      );
      document.getElementById("keys_vmware_v13").innerHTML = JSON.stringify(
        data.vmware.v13
      );
      document.getElementById("keys_vmware_v14").innerHTML = JSON.stringify(
        data.vmware.v14
      );
      document.getElementById("keys_vmware_v15").innerHTML = JSON.stringify(
        data.vmware.v15
      );
      document.getElementById("keys_vmware_v16").innerHTML = JSON.stringify(
        data.vmware.v16
      );

      // msoffice
      document.getElementById("keys_msoffice_2007").innerHTML = JSON.stringify(
        data.msoffice[2007]
      );
    }
  })
  .catch((error) => {
    console.log("Error-log:", error);
    document.getElementById("1ku65t").innerHTML = "";
  });
