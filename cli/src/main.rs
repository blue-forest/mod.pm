/*
 * mod.pm
 * Copyright © 2022-2023 Blue Forest
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

use structopt::StructOpt;

#[derive(StructOpt, Debug)]
#[structopt(name = "mod.pm", about = "A universal package manager")]
struct Opt {
  #[structopt(short, long)]
  name: Option<String>,
}

fn main() {
  let opt = Opt::from_args();
  match opt.name {
    Some(name) => println!("Hello, {}!", name),
    None => println!("Hello, World!"),
  }
}
