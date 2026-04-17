import { PostgrestClientOptions } from '@supabase/postgrest-js';
import { PostgrestQueryBuilder } from '@supabase/postgrest-js';

declare interface AccessTokenOptions {
    storageKey?: string;
    paramName?: string;
    saveToStorage?: boolean;
    removeFromUrl?: boolean;
}

export declare interface AuthMethods {
    user(): Promise<unknown>;
    updateUser(data: unknown): Promise<unknown>;
    redirectToLogin(nextUrl?: string): void;
    logout(redirectUrl?: string): void;
    setToken(token: string, saveToStorage?: boolean): void;
    loginViaEmailPassword(email: string, password: string, turnstileToken?: string): Promise<unknown>;
    isAuthenticated(): Promise<boolean>;
    inviteUser(userEmail: string, role: string): Promise<unknown>;
    register(payload: unknown): Promise<unknown>;
    verifyOtp(data: {
        email: string;
        otpCode: string;
    }): Promise<unknown>;
    resendOtp(email: string): Promise<unknown>;
    resetPasswordRequest(email: string): Promise<unknown>;
    resetPassword(data: {
        resetToken: string;
        newPassword: string;
    }): Promise<unknown>;
    changePassword(data: {
        userId: string;
        currentPassword: string;
        newPassword: string;
    }): Promise<unknown>;
}

declare interface CookieOptions {
    expires?: number | Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
}

export declare function createClient(config: VibeCoderConfig): {
    setToken(newToken: string): void;
    getConfig(): {
        serverUrl: string;
        appId: string;
        requiresAuth: boolean;
    };
    auth: AuthMethods;
};

export declare class DataClient {
    private postgrest;
    constructor(projectUrl: string, anonKey: string);
    from(relation: string): PostgrestQueryBuilder<    {} | PostgrestClientOptions, any, any, string, unknown>;
}

export declare function getAccessToken(options?: AccessTokenOptions): string | null;

declare function getCookieItem(cookieName: string): string | null;

export declare function removeAccessToken(options?: Pick<AccessTokenOptions, 'storageKey'>): boolean;

export declare function saveAccessToken(token: string, options?: Pick<AccessTokenOptions, 'storageKey'>): boolean;

declare function setCookieItem(key: string, value: string, options?: CookieOptions): string;

declare namespace Utils {
    export {
        setCookieItem,
        getCookieItem,
        CookieOptions
    }
}
export { Utils }

export declare interface VibeCoderConfig {
    serverUrl?: string;
    appId: string;
    token?: string;
    serviceToken?: string;
    requiresAuth?: boolean;
    appBaseUrl?: string;
    headers?: Record<string, string>;
    options?: {
        onError?: (error: unknown) => void;
    };
}

export declare class VibeCoderError extends Error {
    code?: string;
    statusCode?: number;
    response?: unknown;
    constructor(message: string, statusCode?: number, response?: unknown);
}

export { }
