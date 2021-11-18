import { copyFilePersistent } from "@samual/lib"
import { resolve as resolvePath } from "path"

/**
 * Copies script from hackmud to local source folder.
 *
 * @param sourceFolderPath path to folder containing source files
 * @param hackmudPath path to hackmud directory
 * @param script script to pull in `user.name` format
 */
export async function pull(sourceFolderPath: string, hackmudPath: string, script: string) {
	const [ user, name ] = script.split(".")
	await copyFilePersistent(resolvePath(hackmudPath, user, "scripts", `${name}.js`), resolvePath(sourceFolderPath, user, `${name}.js`))
}

export default pull
