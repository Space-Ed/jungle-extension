# Extending the Jungle Framework

in this repository every branch represents a new case for how to extend Jungle. This is to be used as a guide for authors of domain specific module libraries that are called 'kits'. There are various levels of depth to how one may approach this outlined here.

## Preliminaries

before extending it would be sensible to gain an understanding of the [basic usage](https://github.com/Space-Ed/jungle-operation) of the framework.

## Extending

within the framework there are means to create an endless number of patterns with understanding of a few core concepts

### Foundational Objects

#### Basis
Every component spawned in Jungle is drawn from a basis, a basis is essentially a Class(Nature) and a default specification object(patch). This basis resides within the domain. Every cell has a domain and will create its components by recovering them by basis from the domain.

#### Domain
A domain could as easily be called a namespace or a static pattern tree, it is composed of basies, static definitions and subdomains. Extending, registration and recovery are the essential operations.

#### Nature
A nature is a prototype function for a basis, every public class of jungle is entered as a nature. This semantic difference avoids the confusion when talking about the type of something, since in jungle types are mostly distinguished by having a different construction argument(patch) rather than different prototype

#### Patch
The patch is the argument used to reconstruct a basis *and* the default construction argument. It is a plain object that must contain 'basis' as a key. As well as terminal properties for the construction there is also objects that are themselves patches in this way a patch is a __deep type__ whereas a nature is shallow.  

### Foundational operations

### Extending within the framework

This is the method for creating new kinds of cells, media and constructs that are the essence of a jungle app, by extending from these existing 'natures' there is unbounded possibility to create new patterns and new ways of interacting appropriate to your application. All while providing the capabilities implemented in the magical meta-layer(underlying classes)

### Creating a new domain

Jungle instances are created by drawing a basis from a domain, that means the same basis can be represented differently across contexts, allowing for trans-domain quasi-synchronization(TDQS) - think about file-system, user-interface and remote-server all synchronized but expressed in different ways.

### Extending the underlying classes

Although it should be possible to create any pattern needed within the framework, it may be appropriate to extend the frameworks underlying classes to create a more integrated, hygienic abstraction of a domain. That said the required understanding of underlying structures is greater, so generally is avoided. It is valuable to take this approach when the stucture of the domain closely ties in with the structure of the

- Creating a DOM library.
