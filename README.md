
# mod.pm

mod.pm is an universal package manager for any needs and any platforms. This technology consists of a CLI that allows you to retrieve, install, remove, and update local modules from GitHub repositories.

This project is in the early stages of development, it is not currently usable.

## Future usage

Install mod.pm:
```bash
curl -sSL https://install.mod.pm | bash
```

Search for a module:
```bash
mod.pm search <module name>
```

Install a module:
```bash
mod.pm install <module name>
```

Install a module from a specific version:
```bash
mod.pm install <module name>@<version>
```

List installed modules:
```bash
mod.pm list
```

Update all modules:
```bash
mod.pm update
```

Update a module:
```bash
mod.pm update <module name>
```

Remove a module:
```bash
mod.pm remove <module name>
```

Register a new set of modules:
```bash
mod.pm register <GitHub username>
```

Uninstall mod.pm:
```bash
mod.pm self-destruct
```
