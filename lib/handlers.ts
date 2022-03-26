export async function handlePromise(promise: Promise<any>) {
    let result = null;
    let error = null;

    try {
        result = await promise;
    }
    catch (e: any) {
        error = e;
    }

    return { result, error }
}