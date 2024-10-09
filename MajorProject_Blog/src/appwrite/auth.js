import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        }
        catch (e) {
            throw e;
        }

    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (e) {
            throw e;
        }

    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (e) {
            console.log(e);
        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (e) {
            console.log(e);;
        }
    }
}
const authService = new AuthService();

export default authService