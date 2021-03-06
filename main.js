class GAPI {
  /**
   * Class for fetching data from Github API
   * @param {string} username username of the user whose data will be fetched
   * @param {string} [token] Github token for additional tasks.
   */
  constructor(username, token = null) {
    this.token = token;
    this.username = username;
  }

  /**
   * Fetch information of the user.
   */
  getUser() {
    return new Promise((resolve, reject) => {
      if (!this.username) {
        reject(Error("Invalid Username"));
      }
      fetch(`https://api.github.com/users/${this.username}`)
        .then((data) => {
          resolve(data.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  /**
   * Fetch information of a particular repo.
   * @param {string} repo Name of the repositry of which information is to be fetched
   */
  getRepo(repo) {
    return new Promise((resolve, reject) => {
      if (!repo) reject(Error("Invalid Repo"));

      fetch(`https://api.github.com/repos/${this.username}/${repo}`)
        .then((data) => {
          resolve(data.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }


  // Get Details of the organization in which the user is currently member

  getOrgs() {
    return new Promise((resolve, reject) => {
      if (!this.username) {
        reject(Error("Invalid Username"));
      }

      fetch(`https://api.github.com/users/${this.username}/orgs`)
        .then((data) => {
          resolve(data.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }



  /**
   * Fetch information of a particular organization.
   * @param {string} org Github Organization to fetch organization details
   *
   */

  getOrgMembers(org) {
    return new Promise((resolve, reject) => {
      if (!org) reject(Error("Invalid Organization"));

      fetch(`https://api.github.com/orgs/${org}/members`)
        .then((data) => {
          resolve(data.json());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
